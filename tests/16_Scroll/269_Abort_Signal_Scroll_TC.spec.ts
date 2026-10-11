import { test, expect, Locator } from '@playwright/test';

test.describe('Scroll to Element-TestingAcademy', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');
    });

    test('scroll to view', async ({ page }) => {
        // 5) lazy list grows past 10 once visible
        await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();

        const list = page.getByTestId('lazy-list').locator('li');

        // wait for the first load to land (two batches of 5) before reading the count:
        // read too early, initialCount is 0 and the poll below passes without any scroll.
        await expect(list).toHaveCount(10);
        const initialCount = await list.count();

        // the next batch loads when the loader comes back into view. At 1920x1080 the
        // whole list already fits, so scrolling to the last item alone loads nothing.
        await page.evaluate(() => window.scroll(0,0));
        await page.getByTestId('lazy-loader').scrollIntoViewIfNeeded();

        await expect.poll( async () =>list.count(),
    {
        message:"Expected_item >10",
        timeout:10_000
    }).toBeGreaterThan(initialCount);

    const finalcount =await list.count();
    console.log(finalcount);

    await page.waitForTimeout(5000);
       // await page.pause();
    });

    test('cancel the wait with an AbortSignal', async ({page}) =>{
        await page.setContent('<button style="display:none">Hidden</button>');
        const controller =new AbortController();
        setTimeout(() => controller.abort(),500);

        await expect(
            page.locator('button')
            .scrollIntoViewIfNeeded({   signal:controller.signal }   )
        ).rejects.toThrow('aborted');
    });
});