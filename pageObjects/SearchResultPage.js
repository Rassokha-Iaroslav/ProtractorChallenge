var SearchResultPage = function () {
    var moreButton = element(by.css("#search-slider-112080 > div.col-xs-24.search__header.ee-search-slider__header.js-header > div.search__button.skeleton__block"));
    var pruductElement = element(by.css("#search-slider-115962 > div:nth-child(3) > div.js--search__results.search__results.search__results--grid.row > div:nth-child(2) > div > a"))
    var expectedConditions = protractor.ExpectedConditions;

    this.showAllSearchResults = async function () {
        browser.wait(expectedConditions.elementToBeClickable(moreButton), 3000);
        await moreButton.click();
    };

    this.selectRandomProduct = async function () {
        browser.wait(expectedConditions.elementToBeClickable(pruductElement), 3000);
        await pruductElement.click();
    }
};
module.exports = new SearchResultPage();