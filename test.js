const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeTikTokComments(videoUrl) {
  try {
    // Make an HTTP request to the TikTok video URL
    const response = await axios.get(videoUrl);

    // Load the HTML content into Cheerio
    const $ = cheerio.load(response.data);

    // Extract comments using a specific selector (you might need to adjust this)
    const comments = [];
    $('.css-1mf23fd-DivContentContainer .e1g2efjf1').each((index, element) => {
      const commentText = $(element).text().trim();
      comments.push(commentText);
    });

    console.log('TikTok Comments:', comments);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Replace 'https://www.tiktok.com/@username/video/1234567890123456789' with the actual TikTok video URL
const tikTokVideoUrl = 'https://www.tiktok.com/@drbotak.goh/video/7301957649724132615';
scrapeTikTokComments(tikTokVideoUrl);