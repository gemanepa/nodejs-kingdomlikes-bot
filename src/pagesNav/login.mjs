import consoleMessage from '../../utils/consoleMessage.mjs';

export default async function navigatingLogin(page, selectors) {
    const { emailField, passField, submitBtn } = selectors;
    await page.goto('https://kingdomlikes.com/')
    consoleMessage('log', 'Entered kingdomlikes login page', true)
    await page.type(emailField, process.env.EMAIL)
    consoleMessage('log', 'Email field completed')
    await page.type(passField, process.env.PASSWORD)
    consoleMessage('log', 'Password field completed')
    consoleMessage('log', 'Submitting...')
    await page.click(submitBtn)
}