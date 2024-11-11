import { MainPage, BasePage, ProductPage, CartPage } from "./pages/index";


export class App extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
        this.mainPage = new MainPage(this.page);
        this.productPage = new ProductPage(this.page);
        this.cartPage = new CartPage(this.page);
    }
}

