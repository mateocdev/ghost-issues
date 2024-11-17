const { Given, When, Then } = require('@cucumber/cucumber');
const { captureScreenshot } = require('../helpers/screenshot');

When('I click on settings menu on sidebar', async function() {
    const element = await this.driver.$('[data-test-nav="settings"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-settings-menu-sidebar');
    return result;
});

When('I click on setting Title & description', async function() {
    const element = await this.driver.$('#general');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-general-settings');
    return result;
});

When('I click edit settings', async function() {
    const element = await this.driver.$('[data-testid="title-and-description"] button');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-edit-title-description');
    return result;
});

When('I enter new title {string} for the site', async function(title) {
    const element = await this.driver.$('[data-testid="title-and-description"] input:nth-child(1)');
    const result = await element.setValue(title);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'enter-new-title');
    return result;
});

When('I click on save settings', async function() {
    const element = await this.driver.$('[data-testid="title-and-description"] button:nth-child(2)');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-save-settings');
    return result;
})

When('I click on setting Design & branding', async function() {
    const element = await this.driver.$('#design');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-design-settings');
    return result;
});

When('I click customize button', async function() {
    const element = await this.driver.$('[data-testid="design"] button');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-customize-button');
    return result;
});

When('I set a random theme color', async function() {
    const element = await this.driver.$('[data-testid="design-modal"] input:nth-child(2)');
    await element.click();
    // generate random color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const result = await element.setValue(randomColor);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'set-accent-color');
    return result;
});

When('I save the design changes', async function() {
    const element = await this.driver.$('[data-testid="design-modal"] div.flex-col:nth-child(2) button:nth-child(2)');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-save-design');
    return result;
});

Then('I check the new accent color was saved', async function() {
    const element = await this.driver.$('[data-testid="design-modal"] div.flex-col:nth-child(2) button:nth-child(2)');
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