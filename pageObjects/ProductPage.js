var SearchResultPage = function() {
    var buyNowButton = element(by.css("#jts-button"));
    var expectedConditions = protractor.ExpectedConditions;

    this.verifyThatBuyNowButtonIsShown =  async function () {
        browser.wait(expectedConditions.elementToBeClickable(buyNowButton), 3000);
        expect(buyNowButton.isPresent()).toBe(true);
    };


};
module.exports = new SearchResultPage();