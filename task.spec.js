const { test, expect } = require('@playwright/test');
const {PageObject} = require ('./pageObject');


// 1. Write an automation script using a Javascript testing framework which will open:
https://www.pecodesoftware.com/qa-portal/greet.php page
test.beforeEach(async ({page}) => {
  const pageobject = new PageObject(page);
  await pageobject.OpenMainPage();
});

test('test', async ({ page }) => {
  const pageobject = new PageObject(page);
  //3. Fill in the “Username” and “Password” input fields and click the “LogIn” button.
  await pageobject.placeHolderUsername.click();
  await page.fill('[placeholder="Username"]', 'Karolina');
  await page.press('[placeholder="Username"]', 'Tab');
  await page.fill('[placeholder="Password"]', '0000');
  await page.click('input:has-text("Login")');

//5. Verify that all the error messages appear.
  await expect(page).toHaveURL('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
  await pageobject.placeHolderUsername.click();
   await page.fill('[placeholder="Username"]', 'test');
  await page.click('input:has-text("Login")');
  await expect(page).toHaveURL('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
  await page.dblclick('[placeholder="Username"]');
  await page.click('html');
  await page.click('text=Please enter your password. Login >> div');
  await page.fill('[placeholder="Username"]', '');
  await page.click('[placeholder="Password"]');
  await page.fill('[placeholder="Password"]', '0000');
  await page.click('input:has-text("Login")');
  await expect(page).toHaveURL('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
  await page.click('input:has-text("Login")');
  await expect(page).toHaveURL('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
  await page.click('[placeholder="Username"]');
  await page.fill('[placeholder="Username"]', 'test');
  await page.press('[placeholder="Username"]', 'Tab');
  await page.fill('[placeholder="Password"]', 'test');
  await page.click('input:has-text("Login")');
  await expect(page).toHaveURL('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
});

  //4. Use an assertion library and verify that all the elements are present on the page.
  // await expect(page.locator('text=QA Portal Login').first()).toBeVisible();
  // await expect(page.locator('input[placeholder="Username"]').first()).toBeEditable();
  // await expect(page.locator('input[placeholder="Username"]').toBeEmpty();
  // await expect(page.locator('input[placeholder="Password"]').toBeEditable();
  // await expect(page.locator('input[placeholder="Password"]').toBeEmpty();
  // await expect(page.locator('input[type="submit"]')).toContainText("Login");