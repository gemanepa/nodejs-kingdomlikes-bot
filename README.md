# NodeJS + Puppeteer KingdomLikes Bot
![](https://i.imgur.com/g27m6M8.png)

This KingdomLikes Bot will authenticate and login into your account, then go to the youtube views section where it will open by itself all the available videos, given you free points automatically

When there are no more videos, the bot will sleep for 5 minutes.
In case of an unexpected crashing for some not considered reason, the bot will automatically restart itself

## Software PreRequisites
* NodeJS v12 or higher https://nodejs.org/es/download/current/
* pm2 http://pm2.keymetrics.io/ (if you want the app to automatically restart in case of error)

## Config
Create a .env file with the EMAIL and PASSWORD of the account.
![](https://i.imgur.com/ZAGSKXK.png)
## Scripts
* `npm install` installs the required modules.
* `npm run start` runs the bot without automatic restart in case of crashing but with pretty font colors
* `npm run monitor:start` runs the app with automatic restart in case of crashing
* `npm run monitor:stop` stops pm2 monitoring & bot
