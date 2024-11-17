const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on settings menu on sidebar', async function() {
    const element = await this.driver.$('a[href="#/settings/"]');
    return await element.click();
});

When('I click on General setting', async function() {
    const element = await this.driver.$('a[href="#/settings/general/"]');
    return await element.click();
});

When('I click edit Title & description', async function() {
    const element = await this.driver.$('button.gh-btn:nth-child(2)');
    return await element.click();
});

When('I enter new title {string} for the site', async function(title) {
    const element = await this.driver.$('div.gh-setting-content-extended > div > input:nth-child(1)');
    return await element.setValue(title);
});

When('I click on save settings', async function() {
    const element = await this.driver.$('.gh-btn-primary');
    return await element.click();
});

When('I click on setting Design', async function() {
    const element = await this.driver.$('button.gh-setting-group:nth-child(2)');
    return await element.click();
});

When('I set a random theme color', async function() {
    const element = await this.driver.$('input[name="accent-color"]');
    await element.click();
    // generate random color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return await element.setValue(randomColor);
});

When('I save the design changes', async function() {
    const element = await this.driver.$('.gh-btn-primary');
    return await element.click();
});

// modal was closed, settings page should be visible
Then('I check the new accent color was saved', async function() {
    const element = await this.driver.$('.gh-canvas-title');
    return await element.getText().then(text => {
        if (text === 'Saved') {
            return true;
        } else {
            return false;
        }
    })
});