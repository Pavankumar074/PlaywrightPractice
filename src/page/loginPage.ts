import {Page} from '@playwright/test';

export class LoginPage {

    private readonly page:Page
    private readonly usernameInput;
    private readonly passwordInput;
    private readonly loginButton;

    constructor(page:Page) {
        this.page=page;
        this.usernameInput=page.locator('#user-name')
        this.passwordInput=page.locator('#password')
        this.loginButton=page.locator("#login-button")
    }

    async login(username:string,password:string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password)
    }

    async clickLogin(){
        await this.loginButton.click();
    }
}