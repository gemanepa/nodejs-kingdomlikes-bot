/* consoleMessage: Logs with date the stuff that's happening 
@param type: string, should be 'log' or 'error'
@param message: string to log
@param linebreak: bool that if true produces a line break before the log
*/
export default function consoleMessage(type, message, linebreak){
  const date = new Date();
  const hour = date.getHours();
  const mins = date.getMinutes();
  const string = `${hour}:${mins} | ${message}`
  linebreak && console.log('')
  type === 'log' ? console.log(string) : console.error(string)
}