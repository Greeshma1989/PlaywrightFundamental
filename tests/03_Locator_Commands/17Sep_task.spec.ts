import {test,expect} from '@playwright/test';

test("Verify the student login page Url", async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
     let emailInput= page.locator("//input[@id='email']");
     await emailInput.fill("Greeshma@test.c");
     
     await page.locator("//input[@placeholder='Enter your password']").fill("123456");
     let loginButton = await page.locator("[data-testid='login-button']");
     await loginButton.click();

    const url = page.url();
    console.log(`Current URL: ${url}`);
    await expect(url).toContain("login-success");
    await page.waitForTimeout(3000);

        
    

    // https://app.thetestingacademy.com/playwright/multiple_element_filter?email=asas%40SDF.COM&password=as#login-success

});