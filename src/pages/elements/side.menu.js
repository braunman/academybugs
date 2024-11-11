import { BasePage } from "../base.page";
import { step } from "allure-js-commons";

export class SideMenu extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.currency_selector = this.page.locator('.ec_currency_select');
        this.filtersByPriceLinks = this.page.locator('.ec_pricepoint_widget a');
    }

    async chooseCurrency(currency) {
        await step(`Choose currency ${currency}`, async () => {
            await this.page.waitForLoadState('networkidle');
            await this.currency_selector.selectOption(currency);
        });
    }

    async filterByPrice(price) {
        await step(`Filter by price ${price}`, async () => {
            const filter = await this.filtersByPriceLinks.filter({ hasText: price });
            await this.click(filter);
        });
    }
}
