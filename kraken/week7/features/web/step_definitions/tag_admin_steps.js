const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const { getAPrioriRandomItemFromDataPool, getPseudoDynamicRandomItemFromDataPool } = require('../helpers/data_pool');

When('I click on Tags menu on sidebar', async function() {
    const element = await this.driver.$('[data-test-nav="tags"]');
    const result = await element.click();
    return result;
})

When('I click New tag', async function() {
    const element = await this.driver.$('[class="view-actions"] > [class="ember-view gh-btn gh-btn-primary"]');
    const result = await element.click();
    return result;
})

When('I click on save button', async function() {
    const element = await this.driver.$('[data-test-button="save"]');
    const result = await element.click();
    return result;
})

When('I check tag is saved', async function() {
    const element = await this.driver.$('[data-test-button="save"]');
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Tag saved: ", result === 'Saved');
    return result;
});

When('I click on post settings button', async function() {
    const element = await this.driver.$('[data-test-psm-trigger]');
    const result = await element.click();
    return result;
})

When('I click on tags input', async function() {
    const element = await this.driver.$('.ember-power-select-trigger-multiple-input');
    const result = await element.click();
    return result;
})

When('I confirm adding tag to post', async function() {
    const element = await this.driver.$('.ember-power-select-trigger-multiple-input');
    const result = await element.keys('Enter');
    return result;
});

Then('I force post to be saved returning to post list', async function() {
    const element = await this.driver.$('[data-test-link="posts"]');
    const result = await element.click();
    return result;
});

When('I enter tag info', async function() {
    let element = await this.driver.$('#tag-name');
    const result = await element.setValue(faker.lorem.words());
    element = await this.driver.$('#tag-description');
    await element.setValue(faker.lorem.sentence());
    return result;
});

When('I enter large tag info', async function() {
    const item = getAPrioriRandomItemFromDataPool('tags_limit_values');
    let element = await this.driver.$('#tag-name');
    const result = await element.setValue(item.name);
    element = await this.driver.$('#tag-description');
    await element.setValue(item.description);
    return result;
});

Then('I check validation errors', async function() {
    let element = await this.driver.$('#tag-name:parent');
    // has class error
    const result = await element.getAttribute('class');
    console.log(this.scenarioNameSlug + " - Validation errors: ", result.includes('error'));
    element = await this.driver.$('#tag-description:parent');
    // has class error
    const result2 = await element.getAttribute('class');
    console.log(this.scenarioNameSlug + " - Validation errors: ", result2.includes('error'));
    return result;
});

When('I check tag is not saved', async function() {
    const element = await this.driver.$('[data-test-button="save"]');
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Tag not saved: ", result === 'Retry' || result === 'Save');
    return result;
});

When('I enter special characters tag info', async function() {
    const item = await getPseudoDynamicRandomItemFromDataPool('tags_special_char_values');
    let element = await this.driver.$('#tag-name');
    const result = await element.setValue(item.name);
    element = await this.driver.$('#tag-description');
    await element.setValue(item.description);
    return result;
});