import consoleMessage from '../../utils/consoleMessage.mjs';

export default async function navigatingHome(page, selectors) {
    consoleMessage('header', 'NAVIGATING HOME', true)
    const { ytviewsBtn } = selectors;
    consoleMessage('info', 'Entered kingdomlikes home page')
    await page.waitForSelector(ytviewsBtn)
    consoleMessage('info', 'Waiting for DOM Loading finished')
  }