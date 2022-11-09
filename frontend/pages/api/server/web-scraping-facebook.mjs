  import * as puppeteer from 'puppeteer';
  import fs from 'fs'
( async () => {
  const browser = await puppeteer.launch({headless:true});
  var page = await browser.newPage();
  await page.goto('https://www.instagram.com/atempestadequesou/');
  await page.waitForNetworkIdle();
  
    const srcAlt = await page.evaluate(async () => {
    
    const nodeListImgs = document.querySelector('._aagv img');
    
    const altImgs = nodeListImgs?.alt
    const srcImgs = nodeListImgs?.src
    let onlyAlt = Object.values({altImgs})
     onlyAlt
    const replaceAlt =  onlyAlt[0].replace(/[\\\n\\"]/gi, "")
    const srcAlt = {srcImgs, replaceAlt}
   
    console.log(srcAlt)
  return srcAlt })
  
  fs.writeFile('instagram.json', JSON.stringify(srcAlt, null, 1), (err) => console.log(err));
  
  
})();