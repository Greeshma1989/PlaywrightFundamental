import { test, expect } from '@playwright/test';

test('Verify Advance Custom DropDowns', async ({ page }) => {
   await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

   console.log(
     await page.locator(".variant-head h2").first().textContent());
     await page.locator("#rs-single").click();  
     await page.getByText("Cypress").click();


     console.log(
     await page.locator(".variant-head h2").nth(1).textContent());
     await page.locator("#rs-multi").click();
     await page.getByText("Pytest").first().click();
     await page.getByText("Mocha").click();
     await page.keyboard.press("Escape");


          console.log(
     await page.locator(".variant-head h2").nth(2).textContent());    
     await page.locator("#rs-creatable").click();
     await page.getByText("performance").click();
     await page.getByText("security").click();
     await page.keyboard.press("Escape");

      console.log(
     await page.locator(".variant-head h2").nth(3).textContent());
          await page.locator("#rs-grouped").click();
          await page.getByText("Cloudflare Workers").click();
     
     console.log(
     await page.locator(".variant-head h2").last().textContent());
     await page.locator("#rs-async").click();
     await page.getByTestId("rs-async-input").fill("pu");
     await expect(page.getByTestId("rs-async-menu")).toContainText('Pune');
     await page.getByRole('option',{ name: "Pune", exact :true},).click();

     
     await page.pause();


});