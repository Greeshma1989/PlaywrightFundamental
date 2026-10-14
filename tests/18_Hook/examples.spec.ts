import { test, expect,Locator } from '@playwright/test';
//import logindata from './login.json'

 test(`Login page test `, async ({ page }) => {
    await page.goto('https://www.flipkart.com/new-elec-clp-march-at-store?pageUID=1791972916839');

    await page.locator('#username').fill('username');
    await page.locator('#password').fill('password'); 
    await page.getByRole('button', { name: 'Login' }).click();


    

 await page.pause();
});