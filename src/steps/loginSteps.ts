import {test,expect} from '@playwright/test';
import {createBdd} from 'playwright-bdd';
import {env} from '../utils/env';
import { Given,When,Then } from '../fixtures/fixtures';


Given('I am on the login page of the application', async ({page}) => {
  await page.goto(env.baseUrl);
});

When('I enter valid {string} and {string}', async ({loginPage}, username, password) => {
    await loginPage.login(env.userName,env.password)
});

When('I click on the login button', async ({loginPage}) => {
    await loginPage.clickLogin();
});

Then('I should be redirected to the homepage', async ({page}) => {
    expect(await page.title()).toBe('Swag Labs');
});