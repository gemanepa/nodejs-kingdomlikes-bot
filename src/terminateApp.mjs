import consoleMessage from '../utils/consoleMessage';

export default function terminateApp(){
    consoleMessage('info', 'Stopping application')
    process.exit()
}