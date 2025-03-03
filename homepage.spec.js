const { test, expect } = require('@playwright/test');

test('Verify navbar and text alignment', async ({ page }) => {
  await page.goto('https://yourwebsite.com');

  const navbar = await page.locator('nav');
  expect(await navbar.evaluate(el => getComputedStyle(el).backgroundColor)).toBe('rgb(0, 0, 255)');  

  const headerText = await page.locator('h1');
  expect(await headerText.evaluate(el => getComputedStyle(el).textAlign)).toBe('center');
});
