import { test, Page,Locator,expect } from '@playwright/test';

async function findEmpName(page: Page, id: string): Promise<Locator> {
    while (true) {
        const row = page.locator("div.oxd-table-card").filter({ hasText: id }).first();
        if (await row.count()) {
            return row;
        }

        const next = page.locator("//ul[@class='oxd-pagination__ul']//li[last()]//button");
        if (await next.count() === 0) {
            throw new Error(`Row not found: ${id}`);
        }

        if (await next.isDisabled()) {
            throw new Error(`Row not found: ${id}`);
        }

        await next.click();
        await page.waitForLoadState('networkidle');
    }
}

test('Automate OrangeHRM', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //login 
    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('[name="password"]').fill("admin123");
    await page.getByRole('button',{name: "Login"}).click();

    console.log("1.Succcessful Logined In");

    //Add an employee 
        console.log("2.Add the employee");

     let newURL = await page.url();
    await expect(newURL).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.waitForLoadState("networkidle");
    await page.locator('a[href$="viewPimModule"]').click();
    
 
   await page.getByRole("button", { name: "Add" }).first().click();
    await page.locator("//input[@placeholder='First Name']").fill("greeshma");
    await page.locator("input[name='middleName']").fill("P");
    await page.getByPlaceholder("Last Name").fill("J");
    const empId:string="4500";
    await page.locator("//label[text()='Employee Id']/following::input").nth(0).fill(empId);
    
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//div/h6").filter({ hasText : 'Personal Details' })).toBeVisible();

    console.log("3.view all employees");

    await page.waitForLoadState("networkidle");
    await page.locator('a[href$="viewPimModule"]').click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
        await page.waitForLoadState("networkidle");
    await expect(page.locator("div.oxd-table-card").first()).toBeVisible();
    
    const rowLocator = await findEmpName(page, empId);
    await rowLocator.locator("button i.bi-trash").click();
    await expect(page.locator("//div/p[@class='oxd-text oxd-text--p oxd-text--card-title']").filter({ hasText : 'Are you Sure?' })).toBeVisible();

    await page.locator("//div[@class='orangehrm-modal-footer']/button[2]").click();
    await expect(page.locator('body')).toContainText('Successfully Deleted');


    await page.pause();


    
    

});