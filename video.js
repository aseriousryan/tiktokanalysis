const puppeteer = require('puppeteer');
// const Signer = require("tiktok-signature");

// const url = "https://www.tiktok.com/@drbotak.goh"
// const USER_AGENT = "Chrome/98.0.4758.109"


async function main() {
    // Signiture
    // const signer = new Signer(null,USER_AGENT);
    // await signer.init();

    // const signature = await signer.sign(url)
    // const navigator = await signer.navigator()

    // console.log(signature);
    // console.log(navigator);

    // await signer.close();
    // End

    const browser = await puppeteer.launch({headless: false});
    
    const page = await browser.newPage();
    
    await page.goto('https://www.tiktok.com/@drbotak.goh');
    
    const selector = '[data-e2e="user-post-item-list"]';
    await page.waitForSelector(selector);
    const videos = await page.$$eval(`${selector}>div`,(els) =>{
        console.log(els);
        return els.map((el) => {
            const hrefs = el.querySelectorAll('a');
            const url = hrefs[0].href;
            const title = hrefs[1].title;
            return { url, title};
        });
    });
    for (const element of videos) {
        
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        try {
            const tikTokUrl = element.url;
            await page.goto(tikTokUrl, { waitUntil: 'domcontentloaded' });

            // LikeCount
            await page.waitForXPath("//strong[@data-e2e='like-count']");
            const [likeCountElement] = await page.$x("//strong[@data-e2e='like-count']");
            const likeCount = await likeCountElement.evaluate(node => node.textContent);

            // LikeCount
            await page.waitForXPath("//strong[@data-e2e='comment-count']");
            const [commentCountElement] = await page.$x("//strong[@data-e2e='comment-count']");
            const CommentCount = await commentCountElement.evaluate(node => node.textContent);

            // LikeCount
            await page.waitForXPath("//strong[@data-e2e='comment-count']");
            const [undefinedCountElement] = await page.$x("//strong[@data-e2e='undefined-count']");
            const UndefinedCount = await undefinedCountElement.evaluate(node => node.textContent);

            // LikeCount
            await page.waitForXPath("//strong[@data-e2e='comment-count']");
            const [shareCountElement] = await page.$x("//strong[@data-e2e='share-count']");
            const ShareCount = await shareCountElement.evaluate(node => node.textContent);

            console.log('URL:', element.url);element.url
            console.log('TikTok Like Count:', likeCount);
            console.log('TikTok Comment Count:', CommentCount);
            console.log('TikTok Undefined Count:', UndefinedCount);
            console.log('TikTok Share Count:', ShareCount);
        } catch (error) {
            console.error('Error:', error);
        } 

        const selector = '[data-e2e="search-comment-container"]';
        await page.waitForSelector(selector);
        const videos = await page.$$eval(`${selector}>div`,(els) =>{
            console.log(els);
            return els.map((el) => {
                const hrefs = el.querySelectorAll('p');
                console.log(hrefs)
                // const url = hrefs[0].href;
                // const title = hrefs[1].title;
                // return { url, title};
            });
        });

        await browser.close();
        
    }


    await browser.close();
    
}

main();