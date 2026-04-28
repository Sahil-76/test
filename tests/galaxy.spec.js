const { test } = require('@playwright/test');

test('Test Case 2 - Galaxy', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  await page.fill('#twotabsearchtextbox', 'Samsung Galaxy');
  await page.press('#twotabsearchtextbox', 'Enter');

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    page.locator('div[data-component-type="s-search-result"]').first().click(),
  ]);

  const price = await page.locator('.a-price').first().textContent();
  console.log('iPhone Price:', price);

  await page.click('#add-to-cart-button');
});