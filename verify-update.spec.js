const { test, expect } = require('@playwright/test');

test('Verify website changes', async ({ page }) => {
  await page.goto('https://yourwebsite.com');  // Change to your actual website URL

  // Example: Check if background color changed
  const backgroundColor = await page.evaluate(() => {
    return getComputedStyle(document.body).backgroundColor;
  });

  expect(backgroundColor).toBe('rgb(255, 0, 0)');  // Expected color (red)

  // Example: Check if new text is present
  const pageContent = await page.textContent('body');
  expect(pageContent).toContain("Expected New Text");  // Replace with actual expected change
});
