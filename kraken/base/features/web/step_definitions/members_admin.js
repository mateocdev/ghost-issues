const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on Members menu on sidebar', async function() {
    const element = await this.driver.$('a[href="#/members/"]');
    return await element.click();
});

When('I click New Member button', async function() {
    const element = await this.driver.$('a[href="#/members/new/"]');
    return await element.click();
});

When('I click on Member name input', async function() {
    const element = await this.driver.$('#member-name');
    return await element.click();
});

When('I enter a random Member email address', async function() {
    const element = await this.driver.$('#member-email');
    return await element.setValue('test' + Math.floor(Math.random() * 100000) + '@test.com');
});

When('I click on save Member button', async function() {
    const element = await this.driver.$('.gh-btn-primary');
    return await element.click();
})

When('I check Member is saved', async function() {
    const element = await this.driver.$('.gh-btn-primary');
    return await element.getText().then(text => {
        if (text === 'Saved') {
            return true;
        } else {
            return false;
        }
    });
})

When('I click on search members bar', async function() {
    const element = await this.driver.$('.gh-members-list-searchfield');
    return await element.click();
});

When('I check there are results in the table', async function() {
    const element = await this.driver.$('.members-list > .gh-list-row');
    return element ? "there are results in the table" : "there are no results in the table";
});