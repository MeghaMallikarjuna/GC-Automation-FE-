import { Page, expect} from "@playwright/test";
import { Selectors } from '@playwright/test';


export class SearchUserNameMegha1 {
    
        readonly page:Page

        constructor(page:Page){

            this.page = page

    }

    async logintoGenesysUsingCredential () { 

            this.page.locator('auth-form',{has: this.page.locator('.pc-only')})
            const emailfield1 = this.page.getByRole('textbox', {name:'email'})
            await emailfield1.fill('megha.m@radarr.com')
            const emailValue = await emailfield1.inputValue()
            expect(emailValue).toEqual('megha.m@radarr.com')
 

            const password = this.page.getByRole('textbox', {name:'password'})
            await password.fill('MeghaRadarr@96')
            const passwordValue = await password.inputValue()
            expect(passwordValue).toContain('MeghaRadarr@96')

            const loginButton = this.page.getByRole('button', {name:'Log In'})
            await loginButton.click()
           await this.page.waitForURL('https://login.usw2.pure.cloud/#/splash');
        expect(this.page.url()).toBe('https://login.usw2.pure.cloud/#/splash');
    }

    async waituntillPageLoaded() {
        
        const pageLoaded = this.page.locator('.auth-form-body', { hasText: 'Welcome to Genesys Cloud' });
        await pageLoaded.waitFor({ state: 'visible' });
       const pageLoadedData = await pageLoaded.textContent()
        expect(pageLoadedData).toContain('Welcome to Genesys Cloud');
    }

    async clickonCollborate (){ 

        const collborate1 = this.page.locator('.multi-line', {hasText: 'Collaborate/ Communicate'});
       await collborate1.click()
       await this.page.waitForURL('https://apps.usw2.pure.cloud/directory/#/person/72a269dd-abf6-4ca2-a47b-9fb96860053f'); 
       expect(this.page.url()).toBe('https://apps.usw2.pure.cloud/directory/#/person/72a269dd-abf6-4ca2-a47b-9fb96860053f');

    }

    async clickonAdminSection (){ 

        await this.page.locator('.top-level-menu-item-label', { hasText: 'Admin' }).click();
        await this.page.waitForURL('https://apps.usw2.pure.cloud/directory/#/admin/welcomeV2');
        expect(this.page.url()).toBe('https://apps.usw2.pure.cloud/directory/#/admin/welcomeV2');
        
    }

    async clickonPeopleSection (){ 
        await this.page.goto('https://apps.usw2.pure.cloud/admin/#/welcomeV2');
        await this.page.content()
        const selector = 'text=People >> nth=1';
        await this.page.waitForSelector(selector, { state: 'visible', timeout: 20000 });
         await this.page.click(selector);
         await this.page.waitForURL('https://apps.usw2.pure.cloud/admin/#/directory/peopleV3')
         expect(this.page.url()).toBe('https://apps.usw2.pure.cloud/admin/#/directory/peopleV3');
         await this.page.waitForTimeout(3000);
         }
     
         async searchNameforMegha1 (){
         const inputField = this.page.locator('[data-t="picker-search-field"]');
         await inputField.fill('Megha1');
         await this.page.waitForSelector('button[data-t="picker-dropdown-button"]:enabled', { timeout: 5000 })
         await this.page.waitForTimeout(3000);
         await this.page.screenshot({ path: 'screenshot.png' });
         }        
   
}