import {expect,Locator,Page} from "@playwright/test";


export class AboutPage{
    private readonly page:Page
    private readonly sauceLabsLogo:Locator

    constructor(page:Page){
        this.page=page
        this.sauceLabsLogo=this.page.getByAltText("Saucelabs")
    }

    async verifySauceLabsLogoVisible(){
        await expect(this.sauceLabsLogo.isVisible).toBeTruthy()
    }

}