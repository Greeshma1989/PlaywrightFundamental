import { test, expect } from '@playwright/test';

test('Verify the testcase of pseudo', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    await page.locator("tr:has(td:text('Priya.Nair'))")
    .locator('input')
    .first().click();

    await page.pause();
    

});