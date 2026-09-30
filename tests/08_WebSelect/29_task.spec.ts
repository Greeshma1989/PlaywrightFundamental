import { test, expect } from '@playwright/test';

test('Verify QA Profile form', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
    
//Fill the First name and Last name text inputs using
// assert the values came back via expect(input).toHaveValue('...').
    await page.locator("#first-name").fill("Greeshma");
    await page.getByLabel("Last name").fill("P");

    const female=await page.getByRole('radio',{name:'Female'});
    await female.check();
    await expect(female).toBeChecked();
    const syr = page.locator("#years-experience");
    await syr.selectOption("7");
    await expect(syr).toHaveValue("7");

     const Tdate =page.locator("#profile-date");
     const today=new Date().toISOString().split("T")[0];
    await Tdate.fill(today);
    await expect(Tdate).toHaveValue(today);


    const prof=await page.getByRole('radio', { name: 'Automation Tester' });
    await prof.check();
    console.log(prof);
    await expect(prof).toHaveValue("Automation Tester");

    //Check multiple Automation tools at once (UFT + Selenium Webdriver) 
    for (const tool of ['UFT', 'Selenium Webdriver']) {
      const cons=  await page.getByRole("checkbox",{name: tool});
      await cons.check();
      await expect(cons).toBeChecked();
    }
    
    //Tick at least three continents; assert the count of checked checkboxes equals 3.   
        for (const continents of ['Asia', 'Europe','North America']) {
        await page.getByRole("checkbox",{name: continents}).check();
        
    }
    const checkedBoxes = page.locator('input[name="continents"]:checked');
    await expect(checkedBoxes).toHaveCount(3);

    //Switch to the Wait Commands tab in the Selenium-commands strip; assert #selenium-tab-panel now contains Wait commands.

    await page.getByRole('tab', { name: 'Wait Commands' }).click();
await expect(page.locator('#selenium-tab-panel')).toContainText('Wait commands');

//Use setInputFiles on the Upload Image input to attach a fixture file; assert the visible file name updated.
await page.getByLabel('Upload Image').setInputFiles('tests/fixtures/image.png');
const download = page.getByRole('link', { name: /Download file/ });
console.log(download);
await expect(download).toHaveAttribute('href', "/playwright/sample-download.txt");

await page.getByRole("button",{name :"Save profile"}).click();
await expect(page.locator("#submission-output")).toBeVisible();

const text = await page.locator("#submission-output").innerText();
const output = JSON.parse(text);
console.log(output);
const result=await page.locator("#submission-output").textContent();
expect(result).toContain('Greeshma');

 await page.pause();
});