import { test, expect } from '@playwright/test';

test('Positive LogIn test', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")  
    await page.fill('input[name="username"]', 'student');
    await page.fill('input[name="password"]', 'Password123');
    await page.click('#submit');
    await page.waitForSelector('h1');
    const text = await page.innerText('h1');
    expect(text).toBe('Logged In Successfully');
    const text2 = await page.innerText('p strong');
    expect(text2).toContain('Congratulations student');
});

test('Negative username test', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")  
    await page.fill('input[name="username"]', 'wrong-username');
    await page.fill('input[name="password"]', 'Password123');
    await page.click('#submit');
    await page.waitForSelector('#error');
    const text = await page.innerText('#error');
    expect(text).toBe('Your username is invalid!');
});

test('Negative password test', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")  
    await page.fill('input[name="username"]', 'student');
    await page.fill('input[name="password"]', 'wrong-Password');
    await page.click('#submit');
    await page.waitForSelector('#error');
    const text = await page.innerText('#error');
    expect(text).toBe('Your password is invalid!');
});