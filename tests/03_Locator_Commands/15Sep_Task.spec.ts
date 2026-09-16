import { test,expect } from'@playwright/test';

test("Verify the appoinment booking opened",async ({page}) =>{
        await page.goto("https://katalon-demo-cura.herokuapp.com/",{
            waitUntil:"commit",
            referer:"https://thetestingacademy.com",
            timeout:3000
        });
         let btn= page.locator("#btn-make-appointment");
         await btn.click();
         await page.waitForTimeout(3000);

        const User = await page.locator('input[placeholder="Username"][readonly]').inputValue();
         let username=page.locator("#txt-username");
         await username.fill(User);
         
         const PassW = await page.locator('input[placeholder="Password"][readonly]').inputValue();
         let password=page.locator("#txt-password");
            await password.fill(PassW);

        let loginBtn=page.locator("#btn-login");
        await loginBtn.click();            
            
         await page.waitForTimeout(3000);

         const heading = page.locator("h2", { hasText: "Make Appointment" });
         await expect(heading).toBeVisible();
         console.log(`${await heading.textContent()}`);

         const url = page.url();
            console.log(`Current URL: ${url}`);
            await expect(url).toContain("appointment");

    //Make Appointment
//https://katalon-demo-cura.herokuapp.com/#appointment

})
