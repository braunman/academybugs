import { BasePage } from "../base.page";
import { step } from "allure-js-commons";

export class ProductCard extends BasePage {
    constructor(element) {
        super(element);
        this.element = element;
        this.image = this.element.locator('div.ec_image_container_none');
        this.addToCard = this.element.locator('h3').getByText('ADD TO CART');
        this.checkout = this.element.locator('h3').getByText('CHECKOUT NOW');
    }

    async clickImage() {
        await step('Click on product image', async () => {
            await this.click(this.image);
        });
    }

    async buyProduct() {
        await step('Buy product', async () => {
            await this.click(this.addToCard);
            await this.click(this.checkout);
        });
    }
}
