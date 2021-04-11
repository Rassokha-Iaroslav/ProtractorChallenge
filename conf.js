var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html',
    captureOnlyFailedSpecs: true
});

exports.config = {

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['searchTests.js'],
    multiCapabilities: [
        {
            browserName: 'chrome',
            // chromeOptions: {
            //     args: [ '--headless', '--disable-gpu', '--window-size=1920,1080', '--no-sandbox']
            // }
        }
        // ,
        // {
        //     browserName: 'firefox',
        // }
    ],

    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    },

    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
}