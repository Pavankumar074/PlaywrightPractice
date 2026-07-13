import { Given, When, Then } from '../fixtures/fixtures'


Then('I should be redirected to the about page', async ({aboutPage}) => {
    await aboutPage.verifySauceLabsLogoVisible()
});