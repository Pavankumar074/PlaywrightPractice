import { When, Then } from '../fixtures/fixtures'


Then('the {string} should be added to the cart', async ({cartPge}, productName: string) => {
    cartPge.verifyItemInCart(productName)
});


When('I click on remove button', async ({cartPge}) => {
    cartPge.clickOnRemoveButtonIncartPage();
});

Then('Item {string} should be removed from the cart', async ({cartPge}, product: string) => {
    cartPge.verifyItemIsRemovedFromCart(product)
});
