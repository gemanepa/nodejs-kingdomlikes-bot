import consoleMessage from '../../utils/consoleMessage.mjs';

export default async function navigatingYtviews(page, selectors) {
    const { playvideoBtn } = selectors;
    await page.goto('https://kingdomlikes.com/free_points/youtube-views');
    consoleMessage('log', 'Entered kingdomlikes youtubeviews page', true)
    await page.waitForSelector(playvideoBtn)
    consoleMessage('log', 'Waiting for DOM Loading finished')
  }