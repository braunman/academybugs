import { step } from "allure-js-commons";

export class BasePage {
    constructor(page) {
        this.page = page;
        this.error_msg = this.page.locator('.academy-popup-bug-subtitle');
    }

    async get_error_text() {
        return await step('Get error message text', async () => {
            return await this.error_msg;
        });
    }

    async open(url) {
        await step(`Open URL: ${url}`, async () => {
            await this.page.goto(url);
            await this.waitPageLoad();
        });
    }

    async click(locator) {
        await step(`Click on locator: ${locator}`, async () => {
            await locator.click();
        });
    }

    async fill(locator, text) {
        await step(`Fill in locator: ${locator} with text: ${text}`, async () => {
            await locator.fill(`${text}`);
        });
    }

    async waitPageLoad() {
        await step('Wait for page load state to be network idle', async () => {
            await this.page.waitForLoadState('networkidle');
        });
    }
}
