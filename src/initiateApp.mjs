import puppeteer from 'puppeteer';
import consoleMessage from '../utils/consoleMessage';

export default async function initiateApp(headless){
    consoleMessage('intro', 'KINGDOMLIKES BOT', true)
    consoleMessage('intro', 'Any issue or improvement idea to report?')
    consoleMessage('intro', '--> github.com/gemanepa/nodejs-kingdomlikes-bot')
    consoleMessage('intro', 'Starting...')
  
    const browser = await puppeteer.launch(headless);
    const page = await browser.newPage();
    return page
}