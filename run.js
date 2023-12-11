const puppeteer = require('puppeteer');

async function getTikTokLikeCount() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    const tikTokUrl = 'https://www.tiktok.com/@drbotak.goh/video/7301957649724132615';
    await page.goto(tikTokUrl, { waitUntil: 'domcontentloaded' });

    // Wait for the element to be present (you might need to adjust the XPath)
    await page.waitForXPath("//strong[@data-e2e='like-count']");

    // Extract the like count value
    const [likeCountElement] = await page.$x("//strong[@data-e2e='like-count']");
    const likeCount = await likeCountElement.evaluate(node => node.textContent);

    console.log('TikTok Like Count:', likeCount);
  } catch (error) {
    console.error('Error:', error);
  } 
  await browser.close();
}

getTikTokLikeCount();