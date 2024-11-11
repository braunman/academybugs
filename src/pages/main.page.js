import { ProductCard } from "./elements/product.card";
import { BasePage } from "./base.page";
import { step } from "allure-js-commons";

export class MainPage extends BasePage {
    constructor(page) {
        super(page);
        this.products_on_page_line = this.page.locator('.ec_product_page_perpage');
        this.product_cards = this.page.locator('.ec_product_li');
    }

    async foundProductByName(productName) {
        return await step('Find product by name', async () => {
            const product_element = await this.product_cards.filter({ hasText: productName });
            return new ProductCard(product_element);
        });
    }

    async selectProductsOnPage(number) {
        await step('Select products on page', async () => {
            await this.click(this.products_on_page_line.filter({ hasText: number }));
        });
    }

    async selectFirstProduct() {
        await step('Select first product', async () => {
            const product_element = await this.product_cards.first();
            const product = new ProductCard(product_element);
            await product.clickImage();
        });
    }

    async buyFirstProduct() {
        await step('Buy first product', async () => {
            const product_element = await this.product_cards.first();
            const product = new ProductCard(product_element);
            await product.buyProduct();
        });
    }
}
