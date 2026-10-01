import { test, expect, Locator, FrameLocator } from '@playwright/test';

test('verify iframe basic functionality', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
    let vechileframe: FrameLocator = await page.frameLocator("#frame-one");
    vechileframe.locator('#RESULT_TextField-1').fill("BMW");
    vechileframe.locator('#RESULT_TextField-2').fill("greeshma");
    vechileframe.locator('#RESULT_TextField-3').fill("MH-12-AB-1234");
    vechileframe.locator('#RESULT_RadioButton-1').selectOption('Sedan');
    vechileframe.locator('#RESULT_TextField-4').fill("2023");
    vechileframe.locator('#RESULT_TextArea-1').fill("Good car for family");

    vechileframe.getByTestId('vehicle-submit').click();

    let result = await vechileframe.locator('#vehicle-output').innerText();
    console.log(result);
    await page.pause();
});