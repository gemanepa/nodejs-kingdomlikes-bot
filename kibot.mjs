import dotenv from 'dotenv';
import puppeteer from 'puppeteer';

dotenv.config();

(async () => {
  const selectors = {
    login: {
      emailField: "#formlogin > .row > input[type=\"email\"]",
      passField: "#formlogin > .row > input[type=\"password\"]",
      submitBtn: '#formlogin > .row > input[type=\"submit\"]'
    },
    home: {
      ytviewsBtn: "#principalcontent"
    },
    ytviews: {
      firstBtn: "button.blue",
      container: ".pagecontent > .container"
    }
  }

  const { login, home, ytviews } = selectors;
  console.log('Entre')
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://kingdomlikes.com/')

  //Login
  console.log('Entre al Login')
  await page.type(login.emailField, process.env.EMAIL)
  await page.type(login.passField, process.env.PASSWORD)
  await page.click(login.submitBtn)

  //Home
  console.log('Entre al Home')
  await page.waitForSelector(home.ytviewsBtn)


  await page.goto('https://kingdomlikes.com/free_points/youtube-views');

  //Youtube Views
  console.log('Entre a Youtube Views')
  await page.waitForSelector(ytviews.firstBtn)
  console.log('I waited for selector')
  //await page.click(ytviews.firstBtn)
  
  for(let i = 0; i > 4; i++) {

  }
  let isNotPlaying = await page.$('span#count') //0:00 //div.mask.zindex.skyblue

  let isDisabled = await page.$('button[disabled]') !== null;



  await browser.close();
})();