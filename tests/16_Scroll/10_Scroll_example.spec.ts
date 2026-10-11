import { test, expect } from '@playwright/test';

test('Practice Playwright scrolling', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // 1. Scroll down
    await page.mouse.wheel(0, 500);

    // 2. Scroll up
    await page.mouse.wheel(0, -300);
    //Scroll right
    await page.mouse.wheel(500, 0);
    //Scroll LEFT
    await page.mouse.wheel(-500, 0);

    // 3. Scroll to the bottom
    await page.evaluate(() => {
        window.scrollTo(
            0,
            document.documentElement.scrollHeight
        );
    });

    // 4. Scroll to the top
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    });

    // 5. Bring a specific element into view
    const link = page.getByRole('link', {
        name: 'Get started'
    });

    await link.scrollIntoViewIfNeeded();
    await expect(link).toBeInViewport();

    await page.pause();
});