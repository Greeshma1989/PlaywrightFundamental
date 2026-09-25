import { test, expect } from '@playwright/test';

test('Verify the test case', async ({ page }) => {

    await page.goto("https://awesomeqa.com/webtable.html");
    /***Objective** :  To find the Helen Bankett first in the web table, and following the web table, please find which country she belongs to.

    **Concept** -  following sibling, Dynamic XPath creation. -> Playwright Locator.
    */

    ////table[@id="customers"]/tbody/tr[4]/td[2]/following-silbling::tr

let name= await page.locator("//table[@id='customers']/tbody/tr[5]/td[2]").textContent();
let company= await page.locator("//table[@id='customers']/tbody/tr[5]/td[2]/preceding-sibling::td").textContent();
let country= await page.locator("//table[@id='customers']/tbody/tr[5]/td[2]/following-sibling::td").textContent();

console.log(`Name :${name},Company : ${company},Country :${country}` );

await page.pause();
});