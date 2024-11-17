const { Given, When, Then } = require('@cucumber/cucumber');

const loginPageObject = require('../pages/login_page');
const loginPage = new loginPageObject();
const { captureScreenshot } = require('../helpers/screenshot');

Given('I am a logged in admin with {kraken-string} and {kraken-string} at {kraken-string}', async function (username, password, ghost_admin_url) {
    loginPage.setBrowserInstance(this.driver);
    await loginPage.visit(ghost_admin_url);
    await loginPage.enterEmail(username);
    await loginPage.enterPassword(password);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'login');
    return await loginPage.clickLoginButton();
});

When('I click on Posts menu on sidebar', async function() {
    const element = await this.driver.$('a[href="#/posts/"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-post-menu-sidebar');
    return result
})

When('I click New Post', async function() {
    const element = await this.driver.$('a[href="#/editor/post/"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-new-post-button');
    return result
})

When('I click on Post title input', async function() {
    const element = await this.driver.$('.gh-editor-title');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-post-title-input');
    return result
})

When('I click on Begin writing input', async function() {
    const element = await this.driver.$('[data-koenig-dnd-container="true"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-begin-writing-input');
    return result
})

When('I check post is saved as draft', async function() {
    const element = await this.driver.$('.gh-editor-post-status');
    await element.click();
    const result = await element.getText().then(function(text) {
        if (text === 'Draft') {
            return true;
        } else {
            return false;
        }
    });
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'check-post-saved-as-draft');
    return result;
})

When('I click on publish menu', async function() {
    const element = await this.driver.$('.gh-publishmenu-trigger');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-publish-menu');
    return result;
})

When('I click on publish button', async function() {
    const element = await this.driver.$('.gh-publishmenu-button');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-publish-button');
    return result;
})

When('I check post is published', async function() {
    const element = await this.driver.$('.gh-editor-post-status');
    const result = await element.getText().then(function(text) {
        if (text.includes('Published')) {
            return true;
        } else {
            return false;
        }
    });
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'check-post-published');
    return result;
})