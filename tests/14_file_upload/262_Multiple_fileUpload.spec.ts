import { test, expect, Locator } from '@playwright/test';
import path from 'path';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/upload-download'; // replace with target page

test.describe('FileUpload handling', () => {

   test.beforeEach(async ({ page }) => {
      await page.goto(URL, { waitUntil: 'domcontentloaded' });
   });

    test('locate FileUpload and upload', async ({ page }) => {

        const filpath=[
            path.join(__dirname,'Testdata.txt'),
            path.join(__dirname,'Testdata.png'),
            path.join(__dirname,'Test.txt'),
        ];

        
        await page.locator("#multi-upload").setInputFiles(filpath);

     const upload=page.locator('#multi-preview');
     await expect(upload).toContainText('Testdata.txt');
     await expect(upload).toContainText('Testdata.png');
     await expect(upload).toContainText('Test.txt');

        await page.pause();
    });

});