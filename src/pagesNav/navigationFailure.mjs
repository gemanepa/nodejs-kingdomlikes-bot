import consoleMessage from '../../utils/consoleMessage.mjs';
import terminateApp from '../terminateApp.mjs'

export default function navigationFailure(pageName) {
    consoleMessage('error', `Navigation error in ${pageName}`)
    terminateApp()
}