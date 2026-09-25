import {test,expect } from '@playwright/test';

test("Verify the multiple element", async ({page}) =>{

    await page.goto ("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const PanelLinkText: string[] = await page.locator('a.list-group-item').allInnerTexts();
    console.log(PanelLinkText.length);

    for(let linktext of PanelLinkText){
        console.log(linktext);
        if( linktext === "Forgotten Password"){
             await page.getByText(linktext).first().click();
        }
    }

        const rightPanelLinks = await page.locator('a.list-group-item').all();
    for (const link of rightPanelLinks) {
        console.log(await link.getAttribute("href"));
    }


  
await page.pause();

    
});