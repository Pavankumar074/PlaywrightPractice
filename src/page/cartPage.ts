import {expect, Locator, Page} from "@playwright/test";

export class CartPage{
    private readonly page:Page
    private readonly cartItem:Locator
    private readonly removeButton:Locator

    constructor(page:Page){
        this.page=page;
        this.cartItem=this.page.locator('.inventory_item_name')
        this.removeButton=this.page.getByText("Remove")
    }

    async verifyItemInCart(productName:string){
       expect(await this.cartItem.innerText()).toContain(productName);
    }

    async clickOnRemoveBuutonIncartPage(){
        await this.removeButton.click()
    }

    async verifyItemIsRemovedFromCart(productName:string){
          expect(await this.cartItem.innerText())
    }
}