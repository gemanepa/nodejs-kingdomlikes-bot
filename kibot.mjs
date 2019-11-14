import dotenv from 'dotenv';

import headless from './settings/headless.json'
import selectors from './settings/selectors.json';
import consoleMessage from './utils/consoleMessage.mjs';

import initiateApp from './src/initiateApp.mjs';


import navigatingLogin from './src/pagesNav/login.mjs';
import navigatingHome from './src/pagesNav/home.mjs';
import navigatingYtviews from './src/pagesNav/ytviews.mjs';
import navigationFailure from './src/pagesNav/navigationFailure.mjs';

import videosViewsHandler from './src/videosViewsHandler/index.mjs'

dotenv.config();

(async () => {

  const page = await initiateApp(headless);
  
  try {
    await navigatingLogin(page, selectors.login)
  } catch { navigationFailure('login')}

  try {
    await navigatingHome(page, selectors.home)
  } catch { navigationFailure('home')}
  
  try {
    await navigatingYtviews(page)
  } catch { navigationFailure('ytviews')}

  await videosViewsHandler(page, selectors.ytviews)

})();