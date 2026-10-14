import { test, expect,Locator } from '@playwright/test';


test('title test', async ({ page,browserName }) => {

    const URL = 'https://leetcode.com/';

    await page.goto('URL');

    

 await page.pause();
});