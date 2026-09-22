import {test,expect} from '@playwright/test';

test("Verify the student login page Url", async ({page}) => {
    
    // // 1. Open the page
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    
    // 2. Store the initial URL
    const initialURL = page.url();

    // 3. Enter invalid User ID
    let emailInput= page.locator("//input[@id='email']");
    await emailInput.fill("Greeshma@test.c");
     
    // 4. Enter invalid Password
    await page.locator("//input[@placeholder='Enter your password']").fill("123456");
    // 5. Select Remember Me
    await page.locator("input[name='remember']").check();

     // 6. Click Login
    let loginButton = await page.locator("[data-testid='login-button']");
     await loginButton.click();

    const url = page.url();
    console.log(`Current URL: ${url}`);
    await expect(url).toContain("login-success");
   



   await page.waitForTimeout(2000);
        
    

    // https://app.thetestingacademy.com/playwright/multiple_element_filter?email=asas%40SDF.COM&password=as#login-success

});