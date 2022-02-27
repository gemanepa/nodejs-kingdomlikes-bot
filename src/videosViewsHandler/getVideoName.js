async function getVideoName(page) {
    try {
      return await page.$eval('.containertitle > h6', el => el.innerHTML);
    } catch { return false }
}

export default getVideoName