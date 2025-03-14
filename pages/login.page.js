import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.submitButton = '#submit';
    }

    async goto() {
        await this.page.goto("https://practicetestautomation.com/practice-test-login/");
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.submitButton);
    }

    async assertLoginSuccess() {
        await this.page.waitForSelector('h1');
        const text = await this.page.innerText('h1');
        expect(text).toBe('Logged In Successfully');
        const text2 = await this.page.innerText('p strong');
        expect(text2).toContain('Congratulations student');
    }

    async assertUsernameError() {
        await this.page.waitForSelector('#error');
        const text = await this.page.innerText('#error');
        expect(text).toBe('Your username is invalid!');
    }

    async assertPasswordError() {
        await this.page.waitForSelector('#error');
        const text = await this.page.innerText('#error');
        expect(text).toBe('Your password is invalid!');
    }
}
