const { Given, When, Then } = require('@cucumber/cucumber');

const loginPageObject = require('../pages/login_page');
const loginPage = new loginPageObject();
const { getAPrioriRandomItemFromDataPool } = require('../helpers/data_pool');
const { captureScreenshot } = require('../helpers/screenshot');
const { faker } = require('@faker-js/faker');


Given('I am a logged in admin with {kraken-string} and {kraken-string} at {kraken-string}', async function (username, password, ghost_admin_url) {
    loginPage.setBrowserInstance(this.driver);
    await loginPage.visit(ghost_admin_url);
    await loginPage.enterEmail(username);
    await loginPage.enterPassword(password);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'login');
    return await loginPage.clickLoginButton();
});

When('I click on Posts menu on sidebar', async function() {
    const element = await this.driver.$('[data-test-nav="posts"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-post-menu-sidebar');
    return result
})

When('I click New Post', async function() {
    const element = await this.driver.$('[data-test-new-post-button]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-new-post-button');
    return result
})

When('I click on publish', async function() {
    const element = await this.driver.$('[data-test-button="publish-flow"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-publish-button');
    return result;
})

When('I click on continue to final review', async function() {
    const element = await this.driver.$('[data-test-button="continue"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-continue-button');
    return result;
})

When('I click on publish, right now', async function() {
    const element = await this.driver.$('[data-test-button="confirm-publish"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-publish-right-now-button');
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
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'check-post-published');
    return result;
})

When('I enter Post info with large title', async function() {
    const post = getAPrioriRandomItemFromDataPool('posts_datapool_edge_case_limits_a_priori');
    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.click();
    await element.setValue(post.title);
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    await element.click();
    const result = await element.setValue(post.content);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'enter-large-title');
    return result;
});

When('I check post is not saved as draft', async function() {
    const element = await this.driver.$('[data-test-editor-post-status]');
    await element.click();
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Post saved: ", result === 'Draft - Saved');
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'check-post-not-saved-as-draft');
});


When('I enter Post info with valid random title and content', async function() {
    faker.seed(new Date().getTime() / 1000);
    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.click();
    await element.setValue(faker.lorem.sentence());
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    await element.click();
    const result = await element.setValue(faker.lorem.paragraph());
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'enter-valid-random-title');
    return result;
});

Then('I check post is saved as draft', async function() {
    const element = await this.driver.$('[data-test-editor-post-status]');
    await element.click();
    const result = await element.getText();
    console.log(this.scenarioNameSlug + " - Post saved: ", result === 'Draft - Saved' || result === 'Saving...');
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'check-post-saved-as-draft');
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
    const result = await element.setValue(content);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'enter-blank-title-or-content');
    return result;
});

When('I go back to Post list', async function() {
    const element = await this.driver.$('[data-test-link="posts"]');
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-back-to-post-list');
    return await element.click();
});

// I click on draft Posts | data-test-nav-custom="posts-Drafts"
When('I click on draft Posts', async function() {
    const element = await this.driver.$('[data-test-nav-custom="posts-Drafts"]');
    const result = await element.click();
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-draft-posts');
    return result;
});

When('I click on edit Post', async function() {
    const element = await this.driver.$('div.posts-list a:nth-child(1)');
    console.log(await element.getAttribute('href'));
    const result = await element.click();
    // wait for the page to load
    await this.driver.pause(2000);
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-edit-post');
    return result;
});

When('I blank title and content', async function() {
    let element = await this.driver.$('[data-test-editor-title-input]');
    await element.setValue('');
    element = await this.driver.$('[data-koenig-dnd-container="true"]');
    const result = await element.setValue('');
    await captureScreenshot(this.driver, this.scenarioNameSlug, 'blank-title-and-content');
    return result;
});
