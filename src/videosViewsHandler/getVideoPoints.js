async function getVideoPoints(page) {
    try {
      return await page.$eval('.containertitle > h5 > span', el => el.innerHTML);
    } catch { return false }
}

export default getVideoPoints