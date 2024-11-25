const { Given, When, Then } = require('@cucumber/cucumber');

const { getRandomItemFromDataPool, getPseudoDynamicRandomItemFromDataPool } = require('../helpers/data_pool');
const { faker } = require('@faker-js/faker');

let specialPageItem;
(async () => {
    specialPageItem = await getPseudoDynamicRandomItemFromDataPool("pages_special_title", 10);
})();

When('I click on Pages menu on sidebar', async function() {
    const element = await this.driver.$('[data-test-nav="pages"]');
    const result = await element.click();

    return result
})

When('I click New Page', async function() {
    const element = await this.driver.$('[data-test-new-page-button]');
    return await element.click();
})

When('I enter Page info with valid random title and content', async function() {
    faker.seed(new Date().getTime() / 1000);
    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.click();
    await element.setValue(faker.lorem.sentence());
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    await element.click();
    return await element.setValue(faker.lorem.paragraph());
});

Then('I check page is saved as draft', async function() {
    const element = await this.driver.$('[data-test-editor-post-status]');
    await element.click();
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Page saved: ", result === 'Draft - Saved' || result === 'Saving...');
});

When('I enter Page info with special characters title', async function() {
    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.click();
    await element.setValue(specialPageItem.title);
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    await element.click();
    await element.setValue(specialPageItem.content);
});

When('I check page is not saved as draft', async function() {
    const element = await this.driver.$('[data-test-editor-post-status]');
    await element.click();
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Post saved: ", result === 'Draft - Saved');
});

When('I enter Page info with large title', async function() {
    const item = getRandomItemFromDataPool('pages_datapool_edge_case_limits_a_priori');
    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.click();
    await element.setValue(item.title);
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    await element.click();
    return await element.setValue(item.content);
});

When('I click on search button', async function() {
    const element = await this.driver.$('[data-test-button="search"]');
    return await element.click();
});

When('I enter search term', async function() {
    const element = await this.driver.$('[name="selectSearchTerm"]');
    return await element.setValue(specialPageItem.title);
});

Then('I got no results for the search term', async function() {
    const element = await this.driver.$('.ember-power-select-option--no-matches-message');
    return await element.getText().then(function(text) {
        return text.includes('No results found');
    });
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
    return await element.setValue(content);
});

When('I check page is published', async function() {
    const element = await this.driver.$('[data-test-complete-title]');
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Page published: ", result.includes('Boom! It\'s out there'));
    return result.includes('Boom! It\'s out there');
});

When('I go back to Page list', async function() {
    const element = await this.driver.$('[data-test-link="pages"]');
    return await element.click();
});

When('I click on draft Pages', async function() {
    // .gh-contentfilter-menu
    let element = await this.driver.$('.gh-contentfilter-menu:nth-child(1)');
    await element.click();
    // li  with attribute  data-option-index="1"
    element = await this.driver.$('li[data-option-index="1"]');
    return await element.click();
});

// the last part of the href is the post id that is dynamic, I wanted to use a regex
When('I click on edit Page', async function() {
    const element = await this.driver.$('div.posts-list a:nth-child(1)');
    console.log(await element.getAttribute('href'));
    return await element.click();
});