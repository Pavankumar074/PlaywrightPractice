import { expect } from "@playwright/test";
import { Given, When, Then } from '../fixtures/fixtures'


Then('the {string} should be added to the cart', async ({cartPge}, productName: string) => {
    cartPge.verifyItemInCart(productName)
});


When('I click on remove buttom', async ({cartPge}) => {
    cartPge.clickOnRemoveBuutonIncartPage();
  
});

Then('Item {string} should be removed from the cart', async ({cartPge}, product: string) => {
    cartPge.verifyItemIsRemovedFromCart(product)
});
