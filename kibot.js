const dotenv = require('dotenv');

const headless = require('./settings/headless.json')
const selectors = require('./settings/selectors.json')

const initiateApp = require('./src/initiateApp.js');
const navigatingLogin = require('./src/pagesNav/login.js');
const navigatingHome = require('./src/pagesNav/home.js');
const navigatingYtviews = require('./src/pagesNav/ytviews.js');
const navigationFailure = require('./src/pagesNav/navigationFailure.js');

const videosViewsHandler = require('./src/videosViewsHandler/index.js')



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