const percySnapshot = require('@percy/puppeteer');
const puppeteer = require('puppeteer');
const TEST_URL = 'https://www.browserstack.com';
const TEST_WIDTHS = [375, 480, 720, 1280, 1440, 1920];



describe('Integration test with visual testing', function() {
    it('Loads the homepage', async function () {
    this.timeout(100000) // 
    console.log(TEST_URL);
    console.log(TEST_URL+'/pricing');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(TEST_URL);
    await percySnapshot(page, 'Homepage test', {widths: TEST_WIDTHS});
    
    await page.goto(TEST_URL+'/pricing'); 
    await percySnapshot(page, 'Priciing', {widths: TEST_WIDTHS});

    await page.goto(TEST_URL+'/integrations/automate');
    await percySnapshot(page, 'automate', {widths: TEST_WIDTHS});

    await page.goto(TEST_URL+'/docs/');
    await percySnapshot(page, 'docs', {widths: TEST_WIDTHS})
    browser.close();
  
    });
});


