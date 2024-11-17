const { Given, When, Then } = require('@cucumber/cucumber');
const { captureScreenshot } = require('../helpers/screenshot');

When('I click on Members menu on sidebar', async function() {
    const element = await this.driver.$('[data-test-nav="members"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-members-menu-sidebar');
    return result;
});

When('I click New Member button', async function() {
    const element = await this.driver.$('[data-test-new-member-button="true"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-new-member-button');
    return result;
});

When('I click on Member name input', async function() {
    const element = await this.driver.$('#member-name');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-member-name-input');
    return result;
});

When('I enter a random Member email address', async function() {
    const element = await this.driver.$('[data-test-input="member-email"]');
    const result = await element.setValue('test' + Math.floor(Math.random() * 100000) + '@test.com');
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-member-email-input');
    return result;
});

When('I click on save Member button', async function() {
    const element = await this.driver.$('[data-test-button="save"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-save-member-button');
    return result;
})

When('I check Member is saved', async function() {
    const element = await this.driver.$('[data-test-button="save"]');
    const result = await element.getText().then(text => {
        if (text === 'Saved') {
            return true;
        } else {
            return false;
        }
    });
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'check-member-saved');
    return result;
})

When('I click on search members bar', async function() {
    const element = await this.driver.$('[data-test-input="members-search"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-search-members-bar');
    return result;
});

When('I check there are results in the table', async function() {
    const element = await this.driver.$('[data-test-table="members"] > table > tbody > tr');
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'check-results-in-table');
    return element ? "there are results in the table" : "there are no results in the table";
});