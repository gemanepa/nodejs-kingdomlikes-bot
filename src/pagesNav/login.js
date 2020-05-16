const consoleMessage = require('../../utils/consoleMessage.js');

async function navigatingLogin(page, selectors) {
    consoleMessage('header', 'NAVIGATING LOGIN', true)

    const { emailField, passField, submitBtn } = selectors;
    await page.goto('https://kingdomlikes.com/')
    consoleMessage('info', 'Entered kingdomlikes login page')
    await page.type(emailField, process.env.EMAIL)
    consoleMessage('info', 'Email field completed')
    await page.type(passField, process.env.PASSWORD)
    consoleMessage('info', 'Password field completed')
    consoleMessage('info', 'Submitting...')
    await page.click(submitBtn)
}

module.exports = navigatingLogin