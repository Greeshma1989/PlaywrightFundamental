import { test, expect,Locator } from '@playwright/test';
import data from './280_Users.json'

test('Verify DDT', async ({ page }) => {

    //await page.goto('');

    console.log(data.username);
    console.log(data.password);


    

 await page.pause();
});