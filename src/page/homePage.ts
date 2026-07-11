import { Page, expect,Locator } from "@playwright/test";

export class HomePage {
  private readonly page;
  private readonly addToCartButton: Locator;
  private readonly cartButton: Locator;
  private readonly hamburger: Locator;
  private readonly aboutLink: Locator;
  private readonly logoutButton:Locator
  private beforeXpath = "//div[text()='";
  private afterXpath = "']";

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = this.page.locator("#add-to-cart");
    this.cartButton = this.page.locator(".shopping_cart_link");
    this.hamburger = this.page.locator(".bm-burger-button");
    this.aboutLink = this.page.locator("#about_sidebar_link");
    this.logoutButton=this.page.locator('#logout_sidebar_link')
  }

  async addItemToCart(productName: string) {
    await this.page.locator(this.beforeXpath + productName + this.afterXpath).click();
  }

  async clickOnCartButton() {
    await this.addToCartButton.click();
    await this.cartButton.click();
  }

  async clickOnHamburger() {
    await expect(this.hamburger).toBeVisible({ timeout: 30000 });
    await this.hamburger.click();
  }

  async clickOnAboutLink() {
    await this.aboutLink.click();
  }

  async clickOnLogout(){
    try{
        await this.logoutButton.click()
    }catch(e){
        console.log("error")
    }
  }
}
