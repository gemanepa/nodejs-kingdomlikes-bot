const consoleMessage = require('../utils/consoleMessage');

function terminateApp(){
    consoleMessage('info', 'Stopping application')
    process.exit()
}

module.exports = terminateApp