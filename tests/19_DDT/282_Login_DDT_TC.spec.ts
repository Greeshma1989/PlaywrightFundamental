import { test, expect,Locator } from '@playwright/test';
import logindata from './test-data/login.json'

test.describe("Login-DDT", () => {
    test.beforeEach(async ({ page}) =>{
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    });

    test("login with valid user",async ({page})=> {
        await page.locator('#email').fill(logindata.validUser.email);
        await page.locator('#password').fill(logindata.validUser.password);
         await page.getByTestId("login-button").click();
    })

    test("login with invalid user",async ({ page }) =>{
    await page.locator("#email").fill(logindata.invalidUser.email);
    await page.locator("#password").fill(logindata.invalidUser.password);
    await page.getByTestId("login-button").click();

    await page.pause();
    });

});