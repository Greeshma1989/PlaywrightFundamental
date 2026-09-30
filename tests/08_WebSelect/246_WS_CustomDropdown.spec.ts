import { test, expect } from '@playwright/test';

test('Verify Custom dropdown', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');



    const title1 = await page.locator("label[for='lang-trigger']").textContent();
    console.log(title1);
    await page.locator("button[data-testid='lang-trigger']").click();
    await page.getByRole("option", { name: "JavaScript" }).click();

    const title2 = await page.locator("label[for='framework-trigger']").textContent();
    console.log(title2);
    await page.getByTestId('dropdown-framework').click();
    await page.locator(".select-option[data-value='React']").click();


    const title3 = await page.locator("label[for='experience-trigger']").textContent();
    console.log(title3);
    await page.getByTestId('dropdown-experience').click();
     await page.getByText("Mid-level (4-6 years)", { exact: true }).click();

     
    await page.pause();


});