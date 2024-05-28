
import {Page, test} from "@playwright/test"
import { SearchUserNameMegha1 } from "./loginpage.spec";

export class PageManager {
    private readonly page: Page
    private readonly searchforname: SearchUserNameMegha1

    constructor(page: Page) {
        this.page = page;
        this.searchforname = new SearchUserNameMegha1(this.page)
    }

    navigateTo() {
        return new SearchUserNameMegha1(this.page);
    }
}