import { test as base} from 'playwright-bdd'
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../page/loginPage';
import { HomePage } from '../page/homePage'
import { CartPage } from '../page/cartPage';
import { AboutPage } from '../page/aboutPage';

type MyFixtures = {
    homepage: HomePage;
    loginPage: LoginPage
    cartPge: CartPage
    aboutPage: AboutPage
}

export const test=base.extend<MyFixtures>({
    homepage: async({page}, use) => {
        await use (new HomePage(page))
    },

    loginPage:async({page},use)=>{
        await use (new LoginPage(page))
    },

    cartPge:async({page},use)=>{
        await use (new CartPage(page))
    },

    aboutPage:async({page},use)=>{
        await use(new AboutPage(page))
    }

})

export const {Given,When,Then} = createBdd(test)