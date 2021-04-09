var HomePage = function () {
    var searchField = element(by.css("pbc-searchfield >form > input[placeholder='Suchbegriff']"));
    var cookieButton = element(by.css("button#onetrust-accept-btn-handler"));
    var expectedConditions = protractor.ExpectedConditions;

    this.openMainPage = async function () {
        browser.get('https://www.payback.de');
        if (cookieButton.isPresent()) {
            await cookieButton.click();
        }
    };

    this.searchForProduct = async function (name) {
        browser.wait(expectedConditions.elementToBeClickable(searchField), 3000);
        await searchField.click();
        await searchField.sendKeys(name);
        await searchField.sendKeys(protractor.Key.ENTER);
    };
    this.getPageTitle = function () {
        return "PAYBACK Bonusprogramm » Punkten + Coupons + Aktionen";
    }
};
module.exports = new HomePage();