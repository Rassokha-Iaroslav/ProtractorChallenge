const testEnv = process.env.testEnv ;

console.log('**'+testEnv+'**');

switch (testEnv) {

    case 'dev':
        module.exports = require('./dev.js');
        break;
    case 'live':
        module.exports = require('./live.js');
        break;
    default:
        console.error("Unrecognised testEnv: " + process.env.testEnv);
        process.exit(1);
}