import { test, expect, Page } from '@playwright/test';

async function printNameAndPrice(page: Page): Promise<void> {
    while (true) {
        const products = page.locator("//div[@data-id]");

        const Totalitem = await products.count();
        console.log(`Total products on this page: ${Totalitem}`);

        for (let i = 0; i < Totalitem; i++) {
            const card = products.nth(i);
            const cameraNameLocator = card.locator("//div[contains(@class,'RG5Slk')]").first();
            const cameraPriceLocator = card.locator("//div[contains(@class,'hZ3P6w')]").first();

            const nameCount = await cameraNameLocator.count();
            const priceCount = await cameraPriceLocator.count();
            if (nameCount > 0 && priceCount > 0) {
                const cameraName = await cameraNameLocator.textContent();
                const cameraPrice = await cameraPriceLocator.textContent();
                console.log(`${i} Camera Name: ${cameraName?.trim()} | ` + `Camera Price: ${cameraPrice?.trim()}`);
            }
        }

        const nextButton = page.locator("//a[normalize-space()='Next']").last();

        if (await nextButton.count() === 0) {
            break;
        }

        if (!(await nextButton.isVisible())) {
            break;
        }

        const currentUrl = page.url();
        await Promise.all([page.waitForURL(newUrl => newUrl.toString() !== currentUrl),nextButton.click()]);
    }
}

test('AutomateFlipkart', async ({ page }) => {

    //1.Navigate to Flipkart 
    await page.goto('https://www.flipkart.com/');

    const closePopup = page.locator("span.b3wTlE");
    if (await closePopup.count() > 0 && await closePopup.isVisible()) {
        await closePopup.click();
    }



    const searchBox = page.locator("//input[@name='q' ]").first();

       await searchBox.fill('DSLR Camera');
        await searchBox.press('Enter');

    // if (await searchBox.count() > 0) {
    //     await expect(searchBox).toBeVisible();
    //     await expect(searchBox).toBeEditable();
    //     await searchBox.fill('DSLR Camera');
    //     await searchBox.press('Enter');
    // }

    await printNameAndPrice(page);

    //await page.pause();
});