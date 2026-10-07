import { test, expect,Locator } from '@playwright/test';

test.describe('Shadow DOM',() => {

    const url= 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom'; // replace with target page';

    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

test('locate Shadow DOM and assert visible', async ({ page }) => {
const card =page.getByTestId("card-account-card");
await card.locator('input[name="email"]').fill("test@example.com");
await card.locator('input[name="password"]').fill("testpassword");

await card.getByRole("button",{ name:"Submit"}).click();

await expect(card.getByTestId("card-account-status")).toContainText("test@example.com");

const cart=page.getByTestId("counter-cart");
await cart.getByRole("button" ,{name: "Increment"}).click();
await cart.getByRole("button" ,{name: "Increment"}).click();
await cart.getByRole("button" ,{name: "Increment"}).click();
await cart.getByRole("button" ,{name: "Increment"}).click();

await expect(cart.getByTestId("counter-value")).toHaveText('7');

    const quantity= page.getByTestId('counter-quantity');
    await quantity.getByRole("button", {name:"Increment" }).click();
    await quantity.getByRole("button", {name:"Increment" }).click();
    await quantity.getByRole("button", {name:"Increment" }).click();
    await quantity.getByRole("button", {name:"Increment" }).click();
    await quantity.getByRole("button", {name:"Increment" }).click();
await expect(quantity.getByTestId("counter-value")).toHaveText("5");


    await page.getByTestId('nested-host');
    await page.getByTestId('card-inside-email').fill('test@p.com');
    await page.getByTestId('card-inside-password').fill('pramod@123');
     await page.getByTestId('card-inside-submit').click();

 await page.pause();
});

});