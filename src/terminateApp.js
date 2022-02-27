import consoleMessage from '../utils/consoleMessage.js';

function terminateApp(){
    consoleMessage('info', 'Stopping application')
    process.exit()
}

export default terminateApp