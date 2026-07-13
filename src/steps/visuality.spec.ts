import {expect } from "@playwright/test";
import { Given,When,Then } from "../fixtures/fixtures";

Then('Login page should pass visual accessibility validation', async ({page}) => {
    page.screenshot({ path: 'login-page.png', fullPage: true });
    await expect(page).toHaveScreenshot('login-page.png', { fullPage: true });
});
