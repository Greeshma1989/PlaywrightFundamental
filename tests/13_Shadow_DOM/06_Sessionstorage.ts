import { chromium } from 'playwright';
import dotenv from 'dotenv';


const authFile = 'session.json';

setup('authenticate', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/login');

    // Complete login manually here.
    // Enter email, OTP, Google login, etc.
    // Wait until you are successfully logged in.

    await page.waitForURL('**/dashboard**');

    await page.context().storageState({ path: authFile });
});