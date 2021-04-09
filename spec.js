var homePage = require('./pageObjects/HomePage');
var searchResultPage = require('./pageObjects/SearchResultPage');
var productPage = require('./pageObjects/ProductPage');

describe('Protractor Automation challenge', function () {

    beforeEach(async function () {
        browser.ignoreSynchronization = true;

        await homePage.openMainPage();

        expect(homePage.getPageTitle()).toEqual('PAYBACK Bonusprogramm » Punkten + Coupons + Aktionen');
    })

    it('Search and assert from main page', async function () {
        await homePage.searchForProduct("fressnapf");

        await searchResultPage.showAllSearchResults();

        await searchResultPage.selectRandomProduct();

        await productPage.verifyThatBuyNowButtonIsShown();
    });
});