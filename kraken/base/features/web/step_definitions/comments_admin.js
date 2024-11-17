const { Given, When, Then } = require('@cucumber/cucumber');
const { captureScreenshot } = require('../helpers/screenshot');

When('I click on access settings menu on sidebar', async function() {
    const element = await this.driver.$('a[href="#/settings/members-access/"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-access-settings-menu-sidebar');
    return result;
});

When('I click edit access settings', async function() {
    const element = await this.driver.$('.view-container.settings-debug section:nth-child(1) button');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-edit-access-settings');
    return result;
});

When('I set allow all members to comment', async function() {
    const element = await this.driver.$('div.gh-radio-button');
    const result = element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-allow-all-members-to-comment');
    return result;
});

When('I click on save comments config', async function() {
    const element = await this.driver.$('.gh-btn-primary');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-save-comments-config');
    return result;
});

Then('I should see comments config saved', async function() {
    const element = await this.driver.$('.gh-btn-green');
    const result = await element.getText().then(function(text) {
        if (text === 'Saved') {
            return true;
        } else {
            return false;
        }
    });
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'see-comments-config-saved');
    return result;
});