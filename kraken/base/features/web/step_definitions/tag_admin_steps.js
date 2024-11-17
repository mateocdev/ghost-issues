const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on Tags menu on sidebar', async function() {
    const element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
})

When('I click New tag', async function() {
    const element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
})

When('I click on Tag name input', async function() {
    const element = await this.driver.$('#tag-name');
    return await element.click();
})

When('I click on save button', async function() {
    const element = await this.driver.$('.gh-btn-primary');
    return await element.click();
})

When('I check tag is saved', async function() {
    const element = await this.driver.$('.gh-btn-primary');
    return await element.getText().then(text => {
        if (text === 'Saved') {
            return true;
        } else {
            return false;
        }
    });
})

When('I click on post settings button', async function() {
    const element = await this.driver.$('button[title="Settings"]');
    return await element.click();
})

When('I click on tags input', async function() {
    const element = await this.driver.$('#tag-input');
    return await element.click();
})

When('I confirm adding tag to post', async function() {
    const element = await this.driver.$('#tag-input');
    return await element.keys('Enter');
});

Then('I force post to be saved closing post settings', async function() {
    const element = await this.driver.$('.gh-editor-title');
    return await element.click();
});