import { test, expect } from '@playwright/test';

test('Verify Advance Custom DropDowns', async ({ page }) => {
   await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

   console.log(
     await page.locator(".variant-head h2").first().textContent());
     console.log(
     await page.locator(".variant-head h2").nth(1).textContent());
          console.log(
     await page.locator(".variant-head h2").nth(2).textContent());    
      console.log(
     await page.locator(".variant-head h2").nth(3).textContent());
             console.log(
     await page.locator(".variant-head h2").last().textContent());
    //await page.selectOption("#dropdown","Option 2");

     await page.pause();


});