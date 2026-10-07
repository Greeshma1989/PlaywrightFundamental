import { test, expect, Locator } from '@playwright/test';
test.describe('File Upload Demo - TestingAcademy', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
    });

    test('Download setInput', async ({ page }) => {

        const [JsonDownload] = await Promise.all([
               page.waitForEvent('download'),
               page.getByTestId('download-json').click()
         ]);

         await JsonDownload.saveAs('./out/'+ JsonDownload.suggestedFilename());
        await page.pause();
    });

});