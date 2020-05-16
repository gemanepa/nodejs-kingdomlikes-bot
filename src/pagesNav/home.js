const consoleMessage = require('../../utils/consoleMessage.js');

async function navigatingHome(page, selectors) {
  consoleMessage('header', 'NAVIGATING HOME', true)
  const { ytviewsBtn } = selectors;
  consoleMessage('info', 'Entered kingdomlikes home page')
  await page.waitForSelector(ytviewsBtn)
  consoleMessage('info', 'Waiting for DOM Loading finished')
}

module.exports = navigatingHome