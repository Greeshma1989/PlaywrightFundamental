import { test, expect } from '@playwright/test';

test('Automate Applitools', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');
    await page.locator('#username').fill('Admin');
    await page.locator('#password').fill('Password@123');
    await page.getByRole('link', { name: 'Sign in' }).click();

    await expect(page).toHaveURL('https://demo.applitools.com/app.html');

    const amountCell = page.locator('table.table-padded tbody tr td:last-child');
    const totalAmountCell = await amountCell.count();
    const amountTexts = await amountCell.allTextContents();
    console.log('Amount Texts:', amountTexts.join(' '));
       let totalAmount = 0;

    for (let amount of amountTexts) {
        const value = parseFloat(
            amount.replace(/[^0-9.-]+/g, '')
        );

        totalAmount += value;
    }

    console.log('Amount Cells:', totalAmountCell);
    console.log('Total Amount:', totalAmount);

 await page.pause();
});