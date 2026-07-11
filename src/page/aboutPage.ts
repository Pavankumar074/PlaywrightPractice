import {expect,Locator,Page} from "@playwright/test";


export class AboutPage{
    private readonly page:Page

    constructor(page:Page){
        this.page=page
    }

    async verifySauceLabsLogoVisible(){
        expect(await this.page.title()).toBe("Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing")
    }

}