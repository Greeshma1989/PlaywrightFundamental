import { test, expect } from '@playwright/test';

test('Hover over Add-ons', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    await page.getByTestId('nav-add-ons').hover();
    await page.getByRole('menuitem',{name:'Wi-Fi'}).click();
      
    const text = await page.locator('#output').innerText();
    console.log('Text:', text);

      await expect(page.getByTestId('hover-output')).toContainText('Wi-Fi'); 

 await page.pause();
});