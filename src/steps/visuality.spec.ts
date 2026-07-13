import {expect } from "@playwright/test";
import { Given,When,Then } from "../fixtures/fixtures";

Then('Login page should pass visual accessibility validation', async ({page}) => {
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('login-page.png', { fullPage: true ,  animations: 'disabled' });
});
