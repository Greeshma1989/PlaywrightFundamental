# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_WebSelect\247_WS_AdvanceDropdown.spec.ts >> Verify Advance Custom DropDowns
- Location: tests\08_WebSelect\247_WS_AdvanceDropdown.spec.ts:3:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByTestId('rs-async-menu')
Expected substring: "pune"
Received string:    "Pune"
Timeout: 5000ms

Call log:
  - Expect "toContainText" getByTestId('rs-async-menu') with timeout 5000ms
  - waiting for getByTestId('rs-async-menu')
    5 × locator resolved to <div role="listbox" class="tta-rs__menu" data-testid="rs-async-menu">…</div>
      - unexpected value "Loading…"
    9 × locator resolved to <div role="listbox" class="tta-rs__menu" data-testid="rs-async-menu">…</div>
      - unexpected value "Pune"

```

```yaml
- listbox:
  - option "Pune"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Verify Advance Custom DropDowns', async ({ page }) => {
  4  |    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
  5  | 
  6  |    console.log(
  7  |      await page.locator(".variant-head h2").first().textContent());
  8  |      await page.locator("#rs-single").click();  
  9  |      await page.getByText("Cypress").click();
  10 | 
  11 | 
  12 |      console.log(
  13 |      await page.locator(".variant-head h2").nth(1).textContent());
  14 |      await page.locator("#rs-multi").click();
  15 |      await page.getByText("Pytest").first().click();
  16 |      await page.getByText("Mocha").click();
  17 |      await page.keyboard.press("Escape");
  18 | 
  19 | 
  20 |           console.log(
  21 |      await page.locator(".variant-head h2").nth(2).textContent());    
  22 |      await page.locator("#rs-creatable").click();
  23 |      await page.getByText("performance").click();
  24 |      await page.getByText("security").click();
  25 |      await page.keyboard.press("Escape");
  26 | 
  27 |       console.log(
  28 |      await page.locator(".variant-head h2").nth(3).textContent());
  29 |           await page.locator("#rs-grouped").click();
  30 |           await page.getByText("Cloudflare Workers").click();
  31 |      
  32 |      console.log(
  33 |      await page.locator(".variant-head h2").last().textContent());
  34 |      await page.locator("#rs-async").click();
  35 |      await page.getByTestId("rs-async-input").fill("pu");
> 36 |      await expect(page.getByTestId("rs-async-menu")).toContainText('pune');
     |                                                      ^ Error: expect(locator).toContainText(expected) failed
  37 |      await page.getByRole('option',{ name: "Pune", exact :true},).click();
  38 | 
  39 |      
  40 |      await page.pause();
  41 | 
  42 | 
  43 | });
```