const consoleMessage = require('../../utils/consoleMessage.js');
const terminateApp = require('../terminateApp.js');

function noPointsFoundTolerance(noPointsFound) {
  if(noPointsFound > 4) {
    consoleMessage('error', 'No points were found in 5 consecutive videos after multiple reloadings and sleeps. Report issue to github user gemanepa');
    terminateApp()
  }
}

module.exports = noPointsFoundTolerance