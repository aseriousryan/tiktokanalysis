const express = require('express');
const puppeteer = require('puppeteer');
// const Signer = require("tiktok-signature");

// const url = "https://www.tiktok.com/@drbotak.goh"
// const USER_AGENT = "Chrome/98.0.4758.109"


const app = express();

app.get('/scrape', async (req, res) => {

    // Signiture
    // const signer = new Signer(null,USER_AGENT);
    // await signer.init();

    // const signature = await signer.sign(url)
    // const navigator = await signer.navigator()

    // console.log(signature);
    // console.log(navigator);

    // await signer.close();
    // End

    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    await page.goto('https://www.tiktok.com/@owizzlee');
    let result = [];

    const selector = '[data-e2e="user-post-item-list"]';
    await page.waitForSelector(selector);
    const videos = await page.$$eval(`${selector}>div`, (els) => {
        
        return els.map((el) => {
            console.log(el);
            const hrefs = el.querySelectorAll('a');
            const url = hrefs[0].href;
            const title = hrefs[1].title;
            return { url, title };
        });
    });
    for (const element of videos) {

        const browser2 = await puppeteer.launch();
        const page2 = await browser2.newPage();

        try {
            const tikTokUrl = element.url;
            await page2.goto(tikTokUrl, { waitUntil: 'domcontentloaded' });

            // LikeCount
            await page2.waitForXPath("//strong[@data-e2e='like-count']");
            const [likeCountElement] = await page2.$x("//strong[@data-e2e='like-count']");
            const likeCount = await likeCountElement.evaluate(node => node.textContent);

            // LikeCount
            await page2.waitForXPath("//strong[@data-e2e='comment-count']");
            const [commentCountElement] = await page2.$x("//strong[@data-e2e='comment-count']");
            const CommentCount = await commentCountElement.evaluate(node => node.textContent);

            // LikeCount
            await page2.waitForXPath("//strong[@data-e2e='comment-count']");
            const [undefinedCountElement] = await page2.$x("//strong[@data-e2e='undefined-count']");
            const UndefinedCount = await undefinedCountElement.evaluate(node => node.textContent);

            // LikeCount
            await page2.waitForXPath("//strong[@data-e2e='comment-count']");
            const [shareCountElement] = await page2.$x("//strong[@data-e2e='share-count']");
            const ShareCount = await shareCountElement.evaluate(node => node.textContent);

            console.log('URL:', element.url); element.url
            console.log('TikTok Like Count:', likeCount);
            console.log('TikTok Comment Count:', CommentCount);
            console.log('TikTok Undefined Count:', UndefinedCount);
            console.log('TikTok Share Count:', ShareCount);
            response = {
                "url": element.url,
                "likes" : likeCount,
                "comment" : CommentCount,
                "bookmark" : UndefinedCount,
                "share" : ShareCount
            }
            result.push(response);
            

        } catch (error) {
            console.error('Error:', error);
        }

        const selector2 = '[data-e2e="search-comment-container"]';
        await page2.waitForSelector(selector2);
        const comments = await page2.$$eval(`${selector2}>div`, (els) => {
            return els.map((el) => {
                console.log(el);
                const comment = el.querySelector('p');
                return { comment };
            });
        });
        console.log(comments);

        await browser.close();

    }


    await browser.close();
    console.log(result);
    res.send({ result });
});

app.listen(3001, () => console.log('Server is running on port 3001'));