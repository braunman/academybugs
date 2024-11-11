
import { test } from '../src/helpers/fixture';
const { expect } = require('@playwright/test');

test('Change number of products on page bug', async ({ app }) => {
  await app.mainPage.selectProductsOnPage('50');
  await expect(app.error_msg).toContainText('the page becomes unresponsive when clicking on the numbers of results')
});


test('Click on image bug', async ({ app }) => {
  const product = await app.mainPage.foundProductByName('Dark Grey Jeans');
  await product.clickImage()
  await expect(app.error_msg).toContainText('')
});


test('Product details bug', async ({ app }) => {
  await app.mainPage.selectFirstProduct();
  await app.productPage.clickOnProductDetail()
  await expect(app.error_msg).toContainText("the short description and description of the product are not in English")
});


test('Change currency bug', async ({ app }) => {
  await app.mainPage.selectFirstProduct();
  await app.productPage.sideMenu.chooseCurrency("EUR")
  await expect(app.error_msg).toContainText('the page freezes when changing the currency')
});

test('Filter by price bug', async ({ app }) => {
  await app.mainPage.selectFirstProduct();
  await app.productPage.sideMenu.filterByPrice("50")
  await expect(app.error_msg).toContainText("the filter by price doesn't work in the product details or product list pages")
});


test('Total price bug', async ({ app }) => {
  await app.mainPage.selectFirstProduct();
  await app.productPage.addToCart()
  await app.cartPage.clickOnTotalPrice()
  await expect(app.error_msg).toContainText("the grand total is $100 more")
});


test('Return to shop spell bug', async ({ app }) => {
  await app.mainPage.selectFirstProduct();
  await app.productPage.addToCart()
  await app.cartPage.deleteProduct()
  await app.cartPage.clickReturnToShop()
  await expect(app.error_msg).toContainText('there is big space before the last letter in "Return to Store"')
});


test('Buy more 2 items', async ({ app }) => {
  await app.mainPage.selectFirstProduct();
  await app.productPage.addToCart()
  await app.cartPage.setItemCount(10)
  await expect(app.error_msg).toContainText('the product quantity cannot be increased past 2')
});