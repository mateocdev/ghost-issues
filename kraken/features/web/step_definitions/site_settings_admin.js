const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on settings menu on sidebar', async function() {
    const element = await this.driver.$('[data-test-nav="settings"]');
    return await element.click();
});

When('I click on setting Title & description', async function() {
    const element = await this.driver.$('#general');
    return await element.click();
});

When('I click edit settings', async function() {
    const element = await this.driver.$('[data-testid="title-and-description"] button');
    return await element.click();
});

When('I enter new title {string} for the site', async function(title) {
    const element = await this.driver.$('[data-testid="title-and-description"] input:nth-child(1)');
    return await element.setValue(title);
});

When('I click on save settings', async function() {
    const element = await this.driver.$('[data-testid="title-and-description"] button:nth-child(2)');
    return await element.click();
});

When('I click on setting Design & branding', async function() {
    const element = await this.driver.$('#design');
    return await element.click();
});

When('I click customize button', async function() {
    const element = await this.driver.$('[data-testid="design"] button');
    return await element.click();
});

When('I set a random theme color', async function() {
    const element = await this.driver.$('[data-testid="design-modal"] input:nth-child(2)');
    await element.click();
    // generate random color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return await element.setValue(randomColor);
});

When('I save the design changes', async function() {
    const element = await this.driver.$('[data-testid="design-modal"] div.flex-col:nth-child(2) button:nth-child(2)');
    return await element.click();
});

Then('I check the new accent color was saved', async function() {
    const element = await this.driver.$('[data-testid="design-modal"] div.flex-col:nth-child(2) button:nth-child(2)');
    return await element.getText().then(text => {
        if (text === 'Saved') {
            return true;
        } else {
            return false;
        }
    })
});