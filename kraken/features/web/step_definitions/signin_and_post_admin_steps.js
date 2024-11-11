const { Given, When, Then } = require('@cucumber/cucumber');


When('I enter email {kraken-string}', async function (email) {
    const element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    const element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click sign in', async function() {
    const element = await this.driver.$('#ember5');
    return await element.click();
})

When('I click on Posts menu on sidebar', async function() {
    const element = await this.driver.$('[data-test-nav="posts"]');
    return await element.click();
})

When('I click New Post', async function() {
    const element = await this.driver.$('[data-test-new-post-button]');
    return await element.click();
})

When('I click on Post title input', async function() {
    const element = await this.driver.$('[data-test-editor-title-input]');
    return await element.click();
})

When('I click on Begin writing input', async function() {
    const element = await this.driver.$('[data-koenig-dnd-container="true"]');
    return await element.click();
})

When('I check post is saved as draft', async function() {
    const element = await this.driver.$('[data-test-editor-post-status]');
    await element.click();
    return await element.getText().then(function(text) {
        if (text === 'Draft - Saved') {
            return true;
        } else {
            return false;
        }
    });
})

When('I click on publish', async function() {
    const element = await this.driver.$('[data-test-button="publish-flow"]');
    return await element.click();
})

When('I click on continue to final review', async function() {
    const element = await this.driver.$('[data-test-button="continue"]');
    return await element.click();
})

When('I click on publish post, right now', async function() {
    const element = await this.driver.$('[data-test-button="confirm-publish"]');
    return await element.click();
})

When('I check post is published', async function() {
    const element = await this.driver.$('[data-test-complete-title]');
    return await element.getText().then(function(text) {
        if (text.includes('Boom! It\'s out there')) {
            return true;
        } else {
            return false;
        }
    });
})