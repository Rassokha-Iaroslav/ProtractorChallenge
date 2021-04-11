exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['searchTests.js'],
    multiCapabilities: [
        {
            browserName: 'chrome',
            // chromeOptions: {
            //     args: [ "--headless", "--disable-gpu"]
            // }
        }
        // ,
        // {
        //     browserName: 'firefox',
        // }
    ]
}