import { test, expect, Locator } from '@playwright/test';

  const URL = 'https://selectorshub.com/xpath-practice-page/'; // replace with target page

test.describe('Shadow Testcases', () => {
  
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('Test Case shadow', async ({ page }) => {

        //const card=page.locator('plasmo-shadow-container');

        await page.getByTitle('user name field').fill("Greeshma");
        await page.locator('#pizza').fill("cheese");

        await page.keyboard.press('Tab');
        await page.keyboard.type('Test123');


         await page.keyboard.press('Tab');
         await page.keyboard.press('Tab');
         await page.keyboard.type('password');

        await page.pause();
    });

});