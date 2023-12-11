const axios = require('axios');

async function main() {
    const reqOpts = {
        method :'GET',
        url: 'https://www.tiktok.com/@drbotak.goh/video/7014423548387216667',
        responseType: 'Document' 
    };
    const { status, data } = await axios(reqOpts);
    // console.log('status',  status);
    console.log('status',  data);
    // Load the HTML into cheerio
}

main();