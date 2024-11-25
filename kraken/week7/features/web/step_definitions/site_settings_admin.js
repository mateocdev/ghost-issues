const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const { getAPrioriRandomItemFromDataPool, getPseudoDynamicRandomItemFromDataPool } = require('../helpers/data_pool');

When('I click on settings menu on sidebar', async function() {
    const element = await this.driver.$('[data-test-nav="settings"]');
    const result = await element.click();
    // wait for 2 seconds for the settings menu to load
    await this.driver.pause(2000);
    return result;
});

When('I click on setting Title & description', async function() {
    const element = await this.driver.$('#general');
    const result = await element.click();
    return result;
});

When('I click edit settings', async function() {
    const element = await this.driver.$('[data-testid="title-and-description"] button');
    const result = await element.click();
    return result;
});

When('I enter new title for the site', async function() {
    const element = await this.driver.$('[data-testid="title-and-description"] input:nth-child(1)');
    const result = await element.setValue(faker.lorem.words());
    return result;
});
// fuera de limite
When('I enter a large title for the site', async function() {
    const item = getAPrioriRandomItemFromDataPool('settings_limit_values');
    const element = await this.driver.$('[data-testid="title-and-description"] input:nth-child(1)');
    const result = await element.setValue(item.title);
    return result;
}); 
// caracteres especiales
When('I enter a title with special characters for the site', async function() {
    const item = await getPseudoDynamicRandomItemFromDataPool('settings_limit_values');
    const element = await this.driver.$('[data-testid="title-and-description"] input:nth-child(1)');
    const result = await element.setValue(item.special_characters_title);
    return result;
});

When('I click on save settings', async function() {
    const element = await this.driver.$('[data-testid="title-and-description"] button:nth-child(2)');
    const result = await element.click();
    return result;
});

Then('I check the new title was saved', async function() {
    const element = await this.driver.$('[data-testid="title-and-description"] button:nth-child(1)');
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - General settings saved: ", result === 'Saved' || result === 'Edit');
    return result;
});

Then('I check the new title was not saved', async function() {
    const element = await this.driver.$('[data-testid="title-and-description"] button:nth-child(1)');
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - General settings not saved: ", result !== 'Saved' || result !== 'Edit');
    return result;
});

When('I click on setting Design & branding', async function() {
    const element = await this.driver.$('#design');
    const result = await element.click();
    return result;
});

When('I click customize button', async function() {
    const element = await this.driver.$('[data-testid="design"] button');
    const result = await element.click();
    return result;
});

When('I set a random theme color', async function() {
    const element = await this.driver.$('[data-testid="design-modal"] input:nth-child(2)');
    await element.click();
    // generate random color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const result = await element.setValue(randomColor);
    return result;
});

When('I save the design changes', async function() {
    const element = await this.driver.$('[data-testid="design-modal"] div.flex-col:nth-child(2) button:nth-child(2)');
    const result = await element.click();
    return result;
});

Then('I check the new accent color was saved', async function() {
    const element = await this.driver.$('[data-testid="design-modal"] div.flex-col:nth-child(2) button:nth-child(2)');
    const result = await element.getText().then(text => {
        if (text === 'Saved') {
            return true;
        } else {
            return false;
        }
    });
    return result;
});