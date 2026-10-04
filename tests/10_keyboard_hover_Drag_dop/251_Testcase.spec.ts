import { test, expect } from '@playwright/test';

test('Verify the testcase', async ({ page }) => {

    await page.goto("https://keycode.info");
     await page.keyboard.press("A");
     await page.screenshot({ path:'A.png'});

     await page.keyboard.press('ArrowLeft');

     await page.keyboard.press('Shift+O');
    await page.screenshot({ path :'shift.png'});

   await page.keyboard.up("Shift");
   await page.keyboard.down("Shift");
   

 await page.pause();
});