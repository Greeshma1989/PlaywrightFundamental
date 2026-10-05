import { test, expect, Locator } from '@playwright/test';

test('Verify Drag and Drop in Kanban Board', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

  let source: Locator = page.getByTestId('card-review-pr-21');
  const sBox = (await source.boundingBox())!;

  let target: Locator = page.locator('[data-Status="review"]');
  const tbox = (await target.boundingBox())!;

  await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
  await page.mouse.down();

  await page.mouse.move(tbox.x + tbox.width / 2, tbox.y + tbox.height / 2);
  await page.mouse.up();

  await page.pause();
});