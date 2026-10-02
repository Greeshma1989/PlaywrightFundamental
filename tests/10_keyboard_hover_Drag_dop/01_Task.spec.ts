import { test, expect } from '@playwright/test';
import { ParseTranscation } from '../../utils/transactionUtils';

test('Verify spent vs earned', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');

    await page.locator('#username').fill('Admin');
    await page.locator('#password').fill('Password@123');
    await page.getByRole('link', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(
        'https://demo.applitools.com/app.html'
    );

    const rows = page.locator('table.table-padded tbody tr');

    const amounts: string[] = [];
    const types: string[] = [];

    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {

        const row = rows.nth(i);
        const typeCell = row.locator('td:nth-child(3)');
        const type1 = await typeCell.textContent();
        const amount = await row
            .locator('td:last-child')
            .innerText();

        const type = await row.innerText();
           
        console.log(`Amount Texts:'${type1}:amount  ${amount}`);
        amounts.push(amount);
        types.push(type);
    }

    const result = ParseTranscation(amounts, types);

    console.log('Spent:', result.spent);
    console.log('Earned:', result.earned);
    console.log('Total:', result.total);

    expect(result.total).toBeCloseTo(1996.22, 2);
 await page.pause();
});