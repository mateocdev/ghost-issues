const { Given, When, Then } = require('@cucumber/cucumber');
const { captureScreenshot } = require('../helpers/screenshot');

When('I click on settings menu on sidebar', async function() {
    const element = await this.driver.$('a[href="#/settings/"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-settings-menu-sidebar');
    return result;
});

When('I click on General setting', async function() {
    const element = await this.driver.$('a[href="#/settings/general/"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-general-settings');
    return result;
});

When('I click edit Title & description', async function() {
    const element = await this.driver.$('button.gh-btn:nth-child(2)');
    const result = await element.click();
    // wait for 2 seconds for the settings menu to load
    await this.driver.pause(2000);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-edit-title-description');
    return result;
});

When('I enter new title {string} for the site', async function(title) {
    const element = await this.driver.$('div.gh-setting-content-extended > div > input:nth-child(1)');
    const result = await element.setValue(title);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'enter-new-title');
    return result;
});

When('I click on save settings', async function() {
    const element = await this.driver.$('.gh-btn-primary');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-save-settings');
    return result;
});

When('I click on setting Design', async function() {
    const element = await this.driver.$('button.gh-setting-group:nth-child(2)');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-design-settings');
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-customize-button');
    return result;
});

When('I set a random theme color', async function() {
    const element = await this.driver.$('input[name="accent-color"]');
    await element.click();
    // generate random color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const result = await element.setValue(randomColor);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'set-accent-color');
    return result;
});

When('I save the design changes', async function() {
    const element = await this.driver.$('.gh-btn-primary');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-save-design');
    return result;
});

// modal was closed, settings page should be visible
Then('I check the new accent color was saved', async function() {
    const element = await this.driver.$('.gh-canvas-title');
    const result = await element.getText().then(text => {
        if (text === 'Saved') {
            return true;
        } else {
            return false;
        }
    })
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'check-accent-color-saved');
    return result;
});