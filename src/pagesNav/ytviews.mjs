import consoleMessage from '../../utils/consoleMessage.mjs';

export default async function navigatingYtviews(page, selectors) {
    consoleMessage('header', 'NAVIGATING YOUTUBE VIEWS', true)
    const { playvideoBtn } = selectors;
    await page.goto('https://kingdomlikes.com/free_points/youtube-views');
    consoleMessage('info', 'Entered kingdomlikes youtubeviews page')
    await page.waitForSelector(playvideoBtn)
    consoleMessage('info', 'Waiting for DOM Loading finished')
  }