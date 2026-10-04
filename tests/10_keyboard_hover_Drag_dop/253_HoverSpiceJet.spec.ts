import { test, expect } from '@playwright/test';

test('Verify Hover Drag and Drop', async ({ page }) => {

   await page.goto('https://www.spicejet.com/');
    //await page.getByText('Add-ons', { exact: true }).hover();
    //await page.getByText('FlyEarly', { exact: true }).click();

    await page.getByText('SpiceClub', { exact: true }).first().hover();
    await page.getByText('Earn Points', { exact: true }).click();
 
 await page.pause();
});