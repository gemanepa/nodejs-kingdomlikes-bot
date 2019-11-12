import dotenv from 'dotenv';
import puppeteer from 'puppeteer';
import selectors from './settings/selectors.json';
import consoleMessage from './utils/consoleMessage.mjs';

dotenv.config();

(async () => {
  const { login, home, ytviews } = selectors;

  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://kingdomlikes.com/')

  /* Login Page */
  consoleMessage('log', 'Entered kingdomlikes login page', true)
  await page.type(login.emailField, process.env.EMAIL)
  consoleMessage('log', 'Email field completed')
  await page.type(login.passField, process.env.PASSWORD)
  consoleMessage('log', 'Password field completed')
  consoleMessage('log', 'Submitting...')
  await page.click(login.submitBtn)
  
  
  /* Home Page */
  consoleMessage('log', 'Entered kingdomlikes home page', true)
  await page.waitForSelector(home.ytviewsBtn)
  consoleMessage('log', 'Waiting for DOM Loading finished')

  await page.goto('https://kingdomlikes.com/free_points/youtube-views');

  /* YoutubeViews Page */
  consoleMessage('log', 'Entered kingdomlikes youtubeviews page', true)
  await page.waitForSelector(ytviews.playvideoBtn)
  consoleMessage('log', 'Waiting for DOM Loading finished')

  let videoNumber = 0;
  setInterval(async function() {
    const isDisabled = await page.$('button.blue[disabled]') === null;
    if(isDisabled) {
      videoNumber += 1;
      /* Video logic */
      const vdPoints = await page.$eval('span.redfont', el => el.innerHTML);
      const vdName = await page.$eval('.containertitle > h6', el => el.innerHTML);
      consoleMessage('log', `Clicking on youtube video number ${videoNumber}`, true)
      consoleMessage('log', `----> Video Name: ${vdName}`)
      consoleMessage('log', `----> Video Points: ${vdPoints}`)
      await page.click(ytviews.playvideoBtn)
      consoleMessage('log', 'Playing video for 1:40 minutes')
      //i += 1;
    }
    // if(i === 5) {
    //   console.log('Exiting browser')
    //   await browser.close();
    //   console.log('Exiting process')
    //   process.exit;
    // }
  }, 10000);



  
})();