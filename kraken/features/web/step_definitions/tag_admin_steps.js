const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on Tags menu on sidebar', async function() {
    const element = await this.driver.$('[data-test-nav="tags"]');
    return await element.click();
})

When('I click New tag', async function() {
    const element = await this.driver.$('[class="view-actions"] > [class="ember-view gh-btn gh-btn-primary"]');
    return await element.click();
})

When('I click on Tag name input', async function() {
    const element = await this.driver.$('#tag-name');
    return await element.click();
})

When('I click on save button', async function() {
    const element = await this.driver.$('[data-test-button="save"]');
    return await element.click();
})

When('I check tag is saved', async function() {
    const element = await this.driver.$('[data-test-button="save"]');
    return await element.getText().then(text => {
        if (text === 'Saved') {
            return true;
        } else {
            return false;
        }
    });
})

When('I click on post settings button', async function() {
    const element = await this.driver.$('[data-test-psm-trigger]');
    return await element.click();
})

When('I click on tags input', async function() {
    const element = await this.driver.$('.ember-power-select-trigger-multiple-input');
    return await element.click();
})

When('I confirm adding tag to post', async function() {
    const element = await this.driver.$('.ember-power-select-trigger-multiple-input');
    return await element.keys('Enter');
});

// I force post to be saved returning to post list | data-test-link="posts"

Then('I force post to be saved returning to post list', async function() {
    const element = await this.driver.$('[data-test-link="posts"]');
    return await element.click();
});