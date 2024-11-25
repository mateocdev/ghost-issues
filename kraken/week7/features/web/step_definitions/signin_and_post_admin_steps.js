const { Given, When, Then } = require('@cucumber/cucumber');

const loginPageObject = require('../pages/login_page');
const loginPage = new loginPageObject();
const { getRandomItemFromDataPool, getPseudoDynamicRandomItemFromDataPool } = require('../helpers/data_pool');
const { faker } = require('@faker-js/faker');


let specialPostItem;
(async () => {
    specialPostItem = await getPseudoDynamicRandomItemFromDataPool("posts_special_title", 10);
})();

Given('I am a logged in admin with {kraken-string} and {kraken-string} at {kraken-string}', async function (username, password, ghost_admin_url) {
    loginPage.setBrowserInstance(this.driver);
    await loginPage.visit(ghost_admin_url);
    await loginPage.enterEmail(username);
    await loginPage.enterPassword(password);
    return await loginPage.clickLoginButton();
});

When('I click on Posts menu on sidebar', async function() {
    const element = await this.driver.$('[data-test-nav="posts"]');
    const result = await element.click();

    return result
})

When('I click New Post', async function() {
    const element = await this.driver.$('[data-test-new-post-button]');
    const result = await element.click();

    return result
})

When('I click on publish', async function() {
    const element = await this.driver.$('[data-test-button="publish-flow"]');
    const result = await element.click();

    return result;
})

When('I click on continue to final review', async function() {
    const element = await this.driver.$('[data-test-button="continue"]');
    const result = await element.click();

    return result;
})

When('I click on publish, right now', async function() {
    const element = await this.driver.$('[data-test-button="confirm-publish"]');
    const result = await element.click();

    return result;
})

When('I check post is published', async function() {
    const element = await this.driver.$('[data-test-complete-title]');
    const result = await element.getText().then(function(text) {
        if (text.includes('Boom! It\'s out there')) {
            return true;
        } else {
            return false;
        }
    });
    return result;
})

When('I enter Post info with large title', async function() {
    const post = getRandomItemFromDataPool('posts_datapool_edge_case_limits_a_priori');
    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.click();
    await element.setValue(post.title);
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    await element.click();
    return await element.setValue(post.content);
});

When('I check post is not saved as draft', async function() {
    const element = await this.driver.$('[data-test-editor-post-status]');
    await element.click();
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Post saved: ", result === 'Draft - Saved');
});


When('I enter Post info with valid random title and content', async function() {
    faker.seed(new Date().getTime() / 1000);
    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.click();
    await element.setValue(faker.lorem.sentence());
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    await element.click();
    return await element.setValue(faker.lorem.paragraph());
});

Then('I check post is saved as draft', async function() {
    const element = await this.driver.$('[data-test-editor-post-status]');
    await element.click();
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Post saved: ", result === 'Draft - Saved' || result === 'Saving...');
});

When('I enter Post info with special characters title', async function() {
    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.click();
    await element.setValue(specialPostItem.title);
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    await element.click();
    return await element.setValue(specialPostItem.content);
});

When('I enter Post info with blank title or content', async function() {
    let title = faker.lorem.sentence();
    let content = faker.lorem.paragraph();

    if (Math.random() < 0.5) {
        title = '';
    } else {
        content = '';
    }

    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.click();
    await element.setValue(title);
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    await element.click();
    return await element.setValue(content);
});

// And I go back to Post list | data-test-link="posts"
When('I go back to Post list', async function() {
    const element = await this.driver.$('[data-test-link="posts"]');
    return await element.click();
});

// I click on draft Posts | data-test-nav-custom="posts-Drafts"
When('I click on draft Posts', async function() {
    const element = await this.driver.$('[data-test-nav-custom="posts-Drafts"]');
    return await element.click();
});

// the last part of the href is the post id that is dynamic, I wanted to use a regex
When('I click on edit Post', async function() {
    const element = await this.driver.$('div.posts-list a:nth-child(1)');
    console.log(await element.getAttribute('href'));
    return await element.click();
});

// And I blank title and content
When('I blank title and content', async function() {
    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.setValue('');
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    return await element.setValue('');
});
