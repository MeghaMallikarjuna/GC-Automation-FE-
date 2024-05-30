import { test, expect } from '@playwright/test';
import { PageManager } from '../page-object-modules/page_manager'
import { config } from '../config';


test.describe('Login Page', () => {
    test('Login and navigate through the application', async ({ page }) => {
        test.setTimeout(100000);
        const pm = new PageManager(page)  
        await page.goto('https://login.usw2.pure.cloud/#/authenticate-adv/org/radarrdemo');
        await expect(page).toHaveTitle('Log In - Genesys Cloud Accounts - Genesys');
        await pm.login().loginpage();
        await pm.login().waituntillPageLoaded();
        await pm.collaborate().clickonCollborate(); 
        await pm.admin().clickonAdminSection(); 
        await pm.people().clickonPeopleSection();
        await pm.searchforname().searchNameforMegha1();
    });

});