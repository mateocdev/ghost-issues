function LoginPage() {}

LoginPage.prototype.visit = function() {
    this.browser.visit("http://localhost:2368/ghost/#/signin");
};

LoginPage.prototype.enterEmail = async function(email) {
    const element = await this.driver.$('#identification');
    return await element.setValue(email);
};

LoginPage.prototype.enterPassword = async function(password) {
    const element = await this.driver.$('#password');
    return await element.setValue(password);
};

LoginPage.prototype.clickLoginButton = async function() {
    const element = await this.driver.$('#ember5');
    return await element.click();
};

LoginPage.prototype.setBrowserInstance = function(browser) {
    LoginPage.prototype.driver = browser;
};

// Exporting in CommonJS style for compatibility with older environments
module.exports = LoginPage;