import { config } from 'dotenv';

import headless from './settings/headless.json';
import selectors from './settings/selectors.json';

import initiateApp from './src/initiateApp.js';
import navigatingLogin from './src/pagesNav/login.js';
import navigatingHome from './src/pagesNav/home.js';
import navigatingYtviews from './src/pagesNav/ytviews.js';
import navigationFailure from './src/pagesNav/navigationFailure.js';

import videosViewsHandler from './src/videosViewsHandler/index.js';



config();

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