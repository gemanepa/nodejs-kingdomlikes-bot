import chalk from 'chalk';
const log = console.log;

/* consoleMessage: Logs with date the stuff that's happening 
@param type: string, should be 'log' or 'error'
@param message: string to log
@param linebreak: bool that if true produces a line break before the log
*/
export default function consoleMessage(type, message, linebreak){
  const logColor = {
    error: 'redBright',
    info: 'cyanBright',
    header: 'yellowBright',
    intro: 'bgBlue'
  }

  const date = new Date();
  const hour = date.getHours();
  const mins = date.getMinutes();

  linebreak && console.log('')

  log(chalk.greenBright(`${hour}:${mins}`) + chalk.magentaBright(' | ') + chalk[logColor[type]](message));

}