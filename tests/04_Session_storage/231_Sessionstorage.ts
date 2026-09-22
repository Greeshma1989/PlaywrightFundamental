import { chromium } from 'playwright';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.VWO_User;


async function saveSession(){
     let browser= await chromium.launch({ headless:false});
     let context =await browser.newContext();
     let page = await context.newPage();

     await page.goto("https://app.wingify.com/#/login");
     await page.waitForTimeout(2000);

     await  page.fill("#login-username", username!);
     await  page.fill("#login-password", process.env.VWO_Password!);
    await page.waitForTimeout(1500);

    await page.click("#js-login-btn");
    await page.waitForURL(/#\/(dashboard|home)/,{
        timeout:15000
    });

    await context.storageState({ path:"./user_session.json"});
    console.log("Session saved to user-Session.json");
    await page.waitForTimeout(2000);

  await browser.close();
}

saveSession();

//D:\PlaywrightFundamental\.env