
export default async function getUserPoints(page, selector) {
    try {
        return await page.$eval(selector, el => el.innerHTML);
      } catch { return false }
}