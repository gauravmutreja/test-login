import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Positive LogIn test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('student', 'Password123');
    await loginPage.assertLoginSuccess();
});

test('Negative username test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('wrong-username', 'Password123');
    await loginPage.assertUsernameError();
});

test('Negative password test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('student', 'wrong-Password');
    await loginPage.assertPasswordError();
});