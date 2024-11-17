const { Given, When, Then } = require('@cucumber/cucumber');

const loginPageObject = require('../pages/login_page');
const loginPage = new loginPageObject();

Given('I am a logged in admin with {kraken-string} and {kraken-string} at {kraken-string}', async function (username, password, ghost_admin_url) {
    loginPage.setBrowserInstance(this.driver);
    await loginPage.visit(ghost_admin_url);
    await loginPage.enterEmail(username);
    await loginPage.enterPassword(password);
    return await loginPage.clickLoginButton();
});

When('I click on Posts menu on sidebar', async function() {
    const element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
})

When('I click New Post', async function() {
    const element = await this.driver.$('a[href="#/editor/post/"]');
    return await element.click();
})

When('I click on Post title input', async function() {
    const element = await this.driver.$('.gh-editor-title');
    return await element.click();
})

When('I click on Begin writing input', async function() {
    const element = await this.driver.$('[data-koenig-dnd-container="true"]');
    return await element.click();
})

When('I check post is saved as draft', async function() {
    const element = await this.driver.$('.gh-editor-post-status');
    await element.click();
    return await element.getText().then(function(text) {
        if (text === 'Draft') {
            return true;
        } else {
            return false;
        }
    });
})

When('I click on publish menu', async function() {
    const element = await this.driver.$('.gh-publishmenu-trigger');
    return await element.click();
})

When('I click on publish button', async function() {
    const element = await this.driver.$('.gh-publishmenu-button');
    return await element.click();
})

When('I check post is published', async function() {
    const element = await this.driver.$('.gh-editor-post-status');
    return await element.getText().then(function(text) {
        if (text.includes('Published')) {
            return true;
        } else {
            return false;
        }
    });
})