import { Page, expect} from "@playwright/test";
import { Selectors } from '@playwright/test';
import { config } from "../config";

export class Login {
    
        readonly page:Page

        constructor(page:Page){

            this.page = page

    }
    /* 
       Log in to Genesys Cloud using valid credentials
    */
    async loginpage () { 
             
        this.page.locator('auth-form',{has: this.page.locator('.pc-only')})
        await this.page.getByRole('textbox', {name:'email'}).fill(config.username)
        await this.page.getByRole('textbox', {name:'password'}).fill(config.password)
        await this.page.getByRole('button', {name:'Log In'}).click()
        await this.page.waitForURL('https://login.usw2.pure.cloud/#/splash');
        expect(this.page.url()).toBe('https://login.usw2.pure.cloud/#/splash');
    }

    async waituntillPageLoaded() {
        
        const pageLoaded = this.page.locator('.auth-form-body', { hasText: 'Welcome to Genesys Cloud' });
        await pageLoaded.waitFor({ state: 'visible' });
       const pageLoadedData = await pageLoaded.textContent()
        expect(pageLoadedData).toContain('Welcome to Genesys Cloud');
    }
}

    /* 
      Click on the Collaborate section
    */

export class Collaborate {
    
    readonly page:Page

    constructor(page:Page){

        this.page = page

}
    async clickonCollborate (){ 

       const collborate1 = this.page.locator('.multi-line', {hasText: 'Collaborate/ Communicate'});
       await collborate1.click()
       await this.page.waitForURL('https://apps.usw2.pure.cloud/directory/#/'); 
       expect(this.page.url()).toContain('https://apps.usw2.pure.cloud/directory/#/');

    }
}

     /* 
       Click on the Admin Section 

    */

    export class Admin {
    
        readonly page:Page
    
        constructor(page:Page){
    
            this.page = page
    
    }

    async clickonAdminSection (){ 

        await this.page.locator('.top-level-menu-item-label', { hasText: 'Admin' }).click();
        await this.page.waitForURL('https://apps.usw2.pure.cloud/directory/#/admin/welcomeV2');
        expect(this.page.url()).toBe('https://apps.usw2.pure.cloud/directory/#/admin/welcomeV2');
        
    }
}

    /* 
       Click on the People section and using search bar, search for username
    */

    export class People {
    
        readonly page:Page
    
        constructor(page:Page){
    
            this.page = page
    
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
     
        }

        export class Searchforname {
    
            readonly page:Page
        
            constructor(page:Page){
        
                this.page = page
        
        }
    
         async searchNameforMegha1 (){
         const inputField = this.page.locator('[data-t="picker-search-field"]');
         await inputField.fill('Megha1');
         await this.page.waitForSelector('button[data-t="picker-dropdown-button"]:enabled', { timeout: 5000 })
         await this.page.waitForTimeout(3000);
         await this.page.screenshot({ path: 'screenshot.png' });
         }        
        }