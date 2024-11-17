const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on access settings menu on sidebar', async function() {
    const element = await this.driver.$('a[href="#/settings/members-access/"]');
    return await element.click();
});

When('I click edit access settings', async function() {
    const element = await this.driver.$('.view-container.settings-debug section:nth-child(1) button');
    return await element.click();
});

When('I set allow all members to comment', async function() {
    const element = await this.driver.$('div.gh-radio-button');
    await element.click();
});

When('I click on save comments config', async function() {
    const element = await this.driver.$('.gh-btn-primary');
    return await element.click();
});