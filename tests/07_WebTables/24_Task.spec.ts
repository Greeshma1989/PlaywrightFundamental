import { test, expect } from '@playwright/test';

test('Select the Rohan.Mehta in the table', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/webtable');
     
    //table[@aria-label="Employee Management System table"]/tbody/tr[3]/td[2] checkbox

    const  felement= "//table[@aria-label='Employee Management System table']/tbody/tr[";
    const   selement= "]/td[";
    const   lelement= "]";

    const  rows=await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr").count();
    const  colms=await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr[1]/td").count();

   for (let i = 1; i <= rows; i++) {

    for(let j=2;j<=colms;j++){
        const dynamicPath = `${felement}${i}${selement}${j}${lelement}`;
          //console.log(dynamicPath);
         const data = await page.locator(dynamicPath).innerText();  
          //console.log(data);
        if (data.includes('Rohan.Mehta')) {
             const namepath = `${dynamicPath}/preceding-sibling::td/input`; 
             const nameclick = await page.locator(namepath).check();
             console.log('------');
             console.log(`Rohan.Mehta is In - ${namepath}`);
        }

    }
   
   }
    
   await page.pause();


});