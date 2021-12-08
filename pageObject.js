const { expect } = require('@playwright/test');

exports.PageObject = class PageObject {
    /**
     * @param{import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.placeHolderUsername = page.locator('[placeholder="Username"]');
           }
    async OpenMainPage() {
        await this.page.goto('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
    }
};