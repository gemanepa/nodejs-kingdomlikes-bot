import consoleMessage from '../../utils/consoleMessage.js';

async function navigatingYtviews(page) {
  consoleMessage('header', 'NAVIGATING YOUTUBE VIEWS', true)
  await page.goto('https://kingdomlikes.com/free_points/youtube-views');
  consoleMessage('info', 'Entered kingdomlikes youtubeviews page')
}

export default navigatingYtviews