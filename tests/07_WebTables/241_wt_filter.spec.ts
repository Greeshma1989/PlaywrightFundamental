import { test, expect } from '@playwright/test';

test('Verify the testcase by filter', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    const forgotpasswordlink= page.locator('a.list-group-item')
    .filter({ hasText: 'Forgotten Password'});
    await forgotpasswordlink.click();

    const privacyLink=page.locator('footer a')
    .filter({
        hasText:'Privacy Policy'
    });

    await expect(privacyLink).toHaveAttribute('href','#privacy-policy');

    await page.pause();
});