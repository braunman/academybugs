import { BasePage } from "./base.page";
import { SideMenu } from "./elements/side.menu";
import { step } from "allure-js-commons";

export class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.product_detail = this.page.locator('.ec_details_description_tab');
        this.sideMenu = new SideMenu(this.page);
        this.addToCartButton = this.page.locator(".ec_details_add_to_cart");
    }

    async clickOnProductDetail() {
        await step('Click on product detail tab', async () => {
            await this.click(this.product_detail);
        });
    }

    async addToCart() {
        await step('Add product to cart', async () => {
            await this.click(this.addToCartButton);
            await this.waitPageLoad()
        });
    }
}