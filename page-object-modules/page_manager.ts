
import {Page, test} from "@playwright/test"
import { Login } from "./search_username";
import { Collaborate } from "./search_username";
import { Admin } from "./search_username";
import { People } from "./search_username";
import { Searchforname } from "./search_username";


export class PageManager {
    private readonly page: Page
    constructor(page: Page) {
        this.page = page;
    }

    login() {
        return new Login(this.page);
    }

    collaborate (){
        return new Collaborate(this.page)
    }
    admin(){ 
        return new Admin(this.page)
    }

    people(){ 
        return new People(this.page)
    }
     
    searchforname(){
        return new Searchforname(this.page)
    }
}