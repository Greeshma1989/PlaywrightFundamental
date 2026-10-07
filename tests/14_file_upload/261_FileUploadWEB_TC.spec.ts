import { test, expect, Locator } from '@playwright/test';
import path from 'path';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/upload-download'; // replace with target page

test.describe('FileUpload handling', () => {

   test.beforeEach(async ({ page }) => {
      await page.goto(URL, { waitUntil: 'domcontentloaded' });
   });



    test('locate FileUpload and upload', async ({ page }) => {
    const filetext=path.join(__dirname,'testdata.txt');
      await page.locator("#single-upload").setInputFiles([filetext]);
      await page.pause();

    });

});