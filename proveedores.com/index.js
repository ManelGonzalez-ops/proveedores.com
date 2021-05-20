const { chromium } = require('playwright');

const options = {
    headless: false,
    slowMo: 50
};

(async () => {
    try {
        const browser = await chromium.launch(options);
        const page = await browser.newPage();
        await page.goto('https://web.gencat.cat/ca/inici');
        //write agnda cultural into input
        await page.fill("input[type=search]#cercadorOcultGoogle", "agenda cultural")
        //  targeting input inside ancestor with .cercador-gencat class
        await page.click(".cercador-gencat >> input[type=submit]")
        // wait for content loaded
        await page.waitForSelector(".NG-menu__title")
        await browser.close();
    }
    catch (err) {
        console.log(err.message)
    }
})();