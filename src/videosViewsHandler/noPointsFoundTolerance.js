import consoleMessage from '../../utils/consoleMessage.js';
import terminateApp from '../terminateApp.js';

function noPointsFoundTolerance(noPointsFound) {
  if(noPointsFound > 4) {
    consoleMessage('error', 'No points were found in 5 consecutive videos after multiple reloadings and sleeps. Report issue to github user gemanepa');
    terminateApp()
  }
}

export default noPointsFoundTolerance