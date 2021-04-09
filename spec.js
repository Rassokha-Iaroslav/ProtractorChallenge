var homePage = require('./pageObjects/HomePage');
var searchResultPage = require('./pageObjects/SearchResultPage');
var productPage = require('./pageObjects/ProductPage');

describe('Protractor Automation challenge', function () {

    beforeEach(async function () {
        browser.ignoreSynchronization = true;

        await homePage.openMainPage();

        expect(browser.getTitle()).toEqual(homePage.getPageTitle());
    })

    it('Search for a product and assert that it could be bought', async function () {
        await homePage.searchForProduct("fressnapf");

        await searchResultPage.showAllSearchResults();

        await searchResultPage.selectRandomProduct();

        await productPage.verifyThatBuyNowButtonIsShown();
    });
});