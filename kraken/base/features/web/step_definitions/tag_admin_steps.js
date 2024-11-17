const { Given, When, Then } = require('@cucumber/cucumber');
const { captureScreenshot } = require('../helpers/screenshot');

When('I click on Tags menu on sidebar', async function() {
    const element = await this.driver.$('a[href="#/tags/"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-tags-menu-sidebar');
    return result;
})

When('I click New tag', async function() {
    const element = await this.driver.$('a[href="#/tags/new/"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-new-tag-button');
    return result;
})

When('I click on Tag name input', async function() {
    const element = await this.driver.$('#tag-name');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-tag-name-input');
    return result;
})

When('I click on save button', async function() {
    const element = await this.driver.$('.gh-btn-primary');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-save-button');
    return result;
})

When('I check tag is saved', async function() {
    const element = await this.driver.$('.gh-btn-primary');
    const result = await element.getText().then(text => {
        if (text === 'Saved') {
            return true;
        } else {
            return false;
        }
    });
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'check-tag-saved');
    return result;
})

When('I click on post settings button', async function() {
    const element = await this.driver.$('button[title="Settings"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-post-settings-button');
    return result;
})

When('I click on tags input', async function() {
    const element = await this.driver.$('#tag-input');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-tags-input');
    return result;
})

When('I confirm adding tag to post', async function() {
    const element = await this.driver.$('#tag-input');
    const result = await element.keys('Enter');
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'confirm-add-tag-to-post');
    return result;
});

Then('I force post to be saved closing post settings', async function() {
    const element = await this.driver.$('.gh-editor-title');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'force-save-post');
    return result;
});