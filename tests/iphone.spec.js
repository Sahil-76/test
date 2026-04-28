const { test } = require('@playwright/test');

test('Test Case 1 - iPhone', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  await page.fill('#twotabsearchtextbox', 'iPhone');
  await page.press('#twotabsearchtextbox', 'Enter');

  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator('div[data-component-type="s-search-result"]').first().click(),
  ]);
  //await newPage.waitForLoadState('domcontentloaded');  
  const price = await newPage.locator('.a-price').first().textContent();
  console.log('iPhone Price:', price);

  await newPage.click('#add-to-cart-button');
});