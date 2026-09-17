import {test, expect} from '@playwright/test';

test("Verify the error message in the wingify free trial page", async ({page}) => {

    await page.goto("https://www.wingify.com/free-trial");
    let inputBox =page.locator("//input[@id='free-trial-step1-email']");
    await inputBox.fill("Greeshma");
    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").click();
    await page.locator("[data-qa='free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox']").click();
    let error_message = page.locator("//div[contains(@class,'invalid-reason')]").first();
    await page.locator("//button[@data-qa='page-su-submit']").first().click();

    let error_message_text = await error_message.textContent();
console.log("Error message:", error_message_text);

    expect(error_message_text).toContain("The email address you entered is incorrect.");
    await page.pause();

});