import { expect } from "@playwright/test";
import { Given, When, Then } from '../fixtures/fixtures'

Given("user is on the homepage", async ({ page }) => {
  expect(await page.title()).toBe("Swag Labs");
});

When("I click on the add to cart button for a {string}",async ({homepage}, product: string) => {
    await homepage.addItemToCart(product);
    await homepage.clickOnCartButton();
  },
);

Given("I click on the about link in the homepage", async ({homepage}) => {
  await homepage.clickOnHamburger();
  await homepage.clickOnAboutLink();
});


Given('I click on hamburger and click on logout button', async ({homepage}) => {
  homepage.clickOnHamburger()
  homepage.clickOnLogout()
});

Then('I should be logged out succesfully', async ({page}) => {
  expect(await page.title()).toBe('Swag Labs')
  
});