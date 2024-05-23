import { test, expect} from '@playwright/test';
import { Loginpage } from '../Page-Object-Models/loginpage.spec'
import { describe } from 'node:test';


describe('Login Page', async()=>{

    test('Login and navigate through the application', async ({ page }) => {

        test.setTimeout(100000);
        const loginPage = new Loginpage(page);
    
        await page.goto('https://login.usw2.pure.cloud/#/authenticate-adv/org/radarrdemo');
        await expect(page).toHaveTitle('Log In - Genesys Cloud Accounts - Genesys');
        await loginPage.credential();
        await loginPage.autoWaiting();
        await loginPage.collborate();
        await loginPage.adminclick();
        await loginPage.people();
        await loginPage.searchname();
    
    })
})



