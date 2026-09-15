import  { test,expect} from '@playwright/test';
 
test("Set referer for entire test", async( {browser}) => {

    let context =await browser.newContext({
        extraHTTPHeaders: {
            "Referer": "htts://thetestingacademy.com"
        }
    });
    let page= await context.newPage();
    await page.goto("https://app.vwo.com/#login");
       console.log("Page 1 — partner referer included");
    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
        console.log("Page 2 — partner referer included");
});