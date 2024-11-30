const { Given, When, Then } = require('@cucumber/cucumber');

const { getAPrioriRandomItemFromDataPool } = require('../helpers/data_pool');
const { captureScreenshot } = require('../helpers/screenshot');
const { faker } = require('@faker-js/faker');


When('I click on Pages menu on sidebar', async function() {
    const element = await this.driver.$('[data-test-nav="pages"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-pages-menu-sidebar');
    return result;
})

When('I click New Page', async function() {
    const element = await this.driver.$('[data-test-new-page-button]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-new-page-button');
    return result;
})

When('I enter Page info with valid random title and content', async function() {
    faker.seed(new Date().getTime() / 1000);
    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.click();
    await element.setValue(faker.lorem.sentence());
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    await element.click();
    const result = await element.setValue(faker.lorem.paragraph());
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'enter-valid-random-title');
    return result;
});

Then('I check page is saved as draft', async function() {
    const element = await this.driver.$('[data-test-editor-post-status]');
    await element.click();
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Page saved: ", result === 'Draft - Saved' || result === 'Saving...');
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'check-page-saved-as-draft');
    return result;
});

When('I check page is not saved as draft', async function() {
    const element = await this.driver.$('[data-test-editor-post-status]');
    await element.click();
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Post saved: ", result === 'Draft - Saved');
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'check-page-not-saved-as-draft');
    return result;
});

When('I enter Page info with large title', async function() {
    const item = getAPrioriRandomItemFromDataPool('pages_datapool_edge_case_limits_a_priori');
    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.click();
    await element.setValue(item.title);
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    await element.click();
    const result = await element.setValue(item.content);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'enter-large-title');
    return result;
});

When('I click on search button', async function() {
    const element = await this.driver.$('[data-test-button="search"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-search-button');
    return result;
});

Then('I got no results for the search term', async function() {
    const element = await this.driver.$('.ember-power-select-option--no-matches-message');
    const result = await element.getText().then(function(text) {
        return text.includes('No results found');
    });
    console.log(this.scenarioNameSlug + " - No results found: ", result);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'no-results-found');
    return result;
});

When('I enter Page info with blank title or content', async function() {
    let title = faker.lorem.sentence();
    let content = faker.lorem.paragraph();

    if (Math.random() < 0.5) {
        title = '';
    } else {
        content = '';
    }

    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.click();
    await element.setValue(title);
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    await element.click();
    const result = await element.setValue(content);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'enter-blank-title-or-content');
    return result;
});

When('I check page is published', async function() {
    const element = await this.driver.$('[data-test-complete-title]');
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Page published: ", result.includes('Boom! It\'s out there'));
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'check-page-published');
    return result;
});

When('I go back to Page list', async function() {
    const element = await this.driver.$('[data-test-link="pages"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'go-back-to-page-list');
    return result;
});

When('I click on draft Pages', async function() {
    // .gh-contentfilter-menu
    let element = await this.driver.$('.gh-contentfilter-menu:nth-child(1)');
    await element.click();
    // li  with attribute  data-option-index="1"
    element = await this.driver.$('li[data-option-index="1"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-draft-pages');
    return result;
});

// the last part of the href is the post id that is dynamic, I wanted to use a regex
When('I click on edit Page', async function() {
    const element = await this.driver.$('div.posts-list a:nth-child(1)');
    console.log(await element.getAttribute('href'));
    const result = await element.click();
    // wait for the page to load
    await this.driver.pause(2000);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-edit-page');
    return result;
});