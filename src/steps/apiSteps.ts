import { request, APIRequestContext, APIResponse, expect } from "@playwright/test";
import { Given, When, Then } from '../fixtures/fixtures'
import { env } from '../utils/env'
import { DataTable } from "playwright-bdd";
import fs from 'fs';

let apiContext: APIRequestContext
let response: APIResponse
let bookingId:number

function readJson(filePath: string) {
    const jsonData=fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);

}

Given('I create the base url', async ({},) => {
    apiContext = await request.newContext({
        baseURL: env.apibaseUrl
    })
    console.log(`Base url is ${env.apibaseUrl}`)
});

Then('I verify the response status code is {int}', async ({}, arg: number) => {
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
});


When('I trigger the post request with endpoint {string} and payload', async ({}, endPoint: string) => {
   const data= readJson('src/testData/apitestdata/apidata.json')
    response = await apiContext.post(endPoint, {
        data: data
    })
    console.log(await response.json())
});

Then('I verify the response body contains the expected data', async ({}) => {
  bookingId = (await response.json()).bookingid
  console.log(`Booking id is ${bookingId}`)
  expect(bookingId).toBeGreaterThan(0)
});


When('I trigger the get request with endpoint {string}', async ({}, endPoint: string) => {
    response = await apiContext.get(endPoint+`/${bookingId}`)
    console.log(await response.json())
});