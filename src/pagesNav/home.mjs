import consoleMessage from '../../utils/consoleMessage.mjs';

export default async function navigatingHome(page, selectors) {
    const { ytviewsBtn } = selectors;
    consoleMessage('log', 'Entered kingdomlikes home page', true)
    await page.waitForSelector(ytviewsBtn)
    consoleMessage('log', 'Waiting for DOM Loading finished')
  }