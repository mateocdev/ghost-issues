const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on access settings menu on sidebar', async function() {
    const element = await this.driver.$('#members');
    return await element.click();
});

When('I click edit access settings', async function() {
    const element = await this.driver.$('[data-testid="access"] button');
    return await element.click();
});

When('I set allow all members to comment', async function() {
    const element = await this.driver.$('[data-testid="commenting-select"]');
    await element.click();
    element.setValue('All members')
});

When('I click on save comments config', async function() {
    const element = await this.driver.$('[data-testid="access"] button:nth-child(2)');
    return await element.click();
});