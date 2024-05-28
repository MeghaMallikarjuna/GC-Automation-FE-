import { test, expect } from '@playwright/test';
import { PageManager } from '../Page-Object-Models/PageManager';


test.describe('Login Page', () => {
    test('Login and navigate through the application', async ({ page }) => {
        test.setTimeout(100000);
        const pm = new PageManager(page)  
        await page.goto('https://login.usw2.pure.cloud/#/authenticate-adv/org/radarrdemo');
        await expect(page).toHaveTitle('Log In - Genesys Cloud Accounts - Genesys');
        await pm.navigateTo().logintoGenesysUsingCredential();
        await pm.navigateTo().logintoGenesysUsingCredential();
        await pm.navigateTo().waituntillPageLoaded();
        await pm.navigateTo().clickonCollborate(); 
        await pm.navigateTo().clickonAdminSection(); 
        await pm.navigateTo().clickonPeopleSection();
        await pm.navigateTo().searchNameforMegha1(); 
    });

});