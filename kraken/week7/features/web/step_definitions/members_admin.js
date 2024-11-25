const { Given, When, Then } = require('@cucumber/cucumber');
const { getRandomItemFromDataPool, getPseudoDynamicRandomItemFromDataPool } = require('../helpers/data_pool');
const { faker } = require('@faker-js/faker');


// let specialPageItem;
// (async () => {
//     specialPageItem = await getPseudoDynamicRandomItemFromDataPool("pages_special_title", 10);
// })();

When('I click on Members menu on sidebar', async function() {
    const element = await this.driver.$('[data-test-nav="members"]');
    const result = await element.click();
    return result;
});

When('I click New Member button', async function() {
    const element = await this.driver.$('[data-test-new-member-button="true"]');
    const result = await element.click();
    return result;
});

When('I click on Member name input', async function() {
    const element = await this.driver.$('#member-name');
    const result = await element.click();
    return result;
});

When('I enter a random Member email address', async function() {
    const element = await this.driver.$('[data-test-input="member-email"]');
    const result = await element.setValue('test' + Math.floor(Math.random() * 100000) + '@test.com');
    return result;
});

When('I click on save Member button', async function() {
    const element = await this.driver.$('[data-test-button="save"]');
    const result = await element.click();
    return result;
})

When('I check Member is saved', async function() {
    const element = await this.driver.$('[data-test-button="save"]');
    const result = await element.getText().then(text => {
        if (text === 'Saved') {
            return true;
        } else {
            return false;
        }
    });
    return result;
})

When('I click on search members bar', async function() {
    const element = await this.driver.$('[data-test-input="members-search"]');
    const result = await element.click();
    return result;
});

When('I check there are results in the table', async function() {
    const element = await this.driver.$('[data-test-table="members"] > table > tbody > tr');
    return element ? "there are results in the table" : "there are no results in the table";
});

When('I enter required member info', async function() {
    const member = getRandomItemFromDataPool('members');
    let element = await this.driver.$('#member-name');
    await element.click();
    await element.setValue(member.first_name + " " + member.last_name);
    element = await this.driver.$('[data-test-input="member-email"]');
    await element.click();
    await element.setValue(member.email);
    return await element;
});

When('I enter required member info with invalid email', async function() {
    const member = await getPseudoDynamicRandomItemFromDataPool('member', 5);
    let element = await this.driver.$('#member-name');
    await element.click();
    await element.setValue(member.first_name + " " + member.last_name);
    element = await this.driver.$('[data-test-input="member-email"]');
    await element.click();
    await element.setValue(member.invalid_email);
    return await element;
});

When('I check Member is not saved', async function() {
    const element = await this.driver.$('[data-test-button="save"]');
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Member saved: ", result === 'Saved');
    return result;
})

When('I check Member is duplicated', async function() {
    const element = await this.driver.$('div.gh-cp-member-email-name p.response');
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Member duplicated: ", result.includes('Member already exists'));
    return result;
});