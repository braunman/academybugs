import { BasePage } from "./base.page";
import { step } from "allure-js-commons";

export class CartPage extends BasePage {
    constructor(page) {
        super(page)
        this.totalPrice = this.page.locator("#ec_cart_total");
        this.deleteItemButton = this.page.locator('div.ec_cartitem_delete')
        this.returnToShopButton = this.page.locator('.ec_cart_empty_button')
        this.itemCountInput = this.page.locator("input.ec_quantity");
        this.updateCountButton = this.page.locator("div.ec_cartitem_update_button");
    }

    async clickOnTotalPrice() {
        await step('Click on total price', async () => {
            await this.totalPrice.click();
        });
    }

    async deleteProduct() {
        await step('Delete product', async () => {
            await this.click(this.deleteItemButton);
        });
    }

    async clickReturnToShop() {
        await step('Click return to shop button', async () => {
            await this.click(this.returnToShopButton);
        });
    }

    async setItemCount(number) {
        await step('Set item count and update', async () => {
            await this.fill(this.itemCountInput, number);
            await this.click(this.updateCountButton);
        });
    }
}