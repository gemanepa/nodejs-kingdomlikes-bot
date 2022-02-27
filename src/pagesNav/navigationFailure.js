import consoleMessage from '../../utils/consoleMessage.js';
import terminateApp from '../terminateApp.js';

function navigationFailure(pageName) {
    consoleMessage('error', `Navigation error in ${pageName}`)
    terminateApp()
}

export default navigationFailure