const consoleMessage = require('../../utils/consoleMessage.js');
const terminateApp = require('../terminateApp.js')

function navigationFailure(pageName) {
    consoleMessage('error', `Navigation error in ${pageName}`)
    terminateApp()
}

module.exports = navigationFailure