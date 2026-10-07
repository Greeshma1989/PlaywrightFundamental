import { test, expect, Locator } from '@playwright/test';
import path from 'path';


const URL = 'https://app.thetestingacademy.com/login'; // replace with target page

test.describe('APP profile pic Testcases', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('Test Case shadow', async ({ page }) => {

        //const card=page.locator('plasmo-shadow-container');


        await page.getByRole('textbox', { name: 'Email address' }).fill('p.greeshma23@gmail.com');
        await page.getByRole('button', { name: 'Continue', exact: true }).click();
        await page.getByRole('textbox', { name: 'Enter verification code' }).fill('531928');
        await page.getByRole('button', { name: 'Account' }).click();
        await page.getByRole('link', { name: 'Settings' }).click();
        await page.getByRole('main').locator('img').click();
        await page.getByText('Upload Photo').click();
        const filePath = path.join(__dirname, 'Greeshma.png');
        await page.getByLabel('Upload Photo').setInputFiles([filePath]);
    });

});   