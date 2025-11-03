import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Check console logs - MUST BE BEFORE page.goto
  page.on('console', msg => {
    const text = msg.text();
    console.log(`Browser console [${msg.type()}]:`, text);
    // Log errors prominently
    if (msg.type() === 'error') {
      console.error(`❌ ERROR: ${text}`);
    }
  });
  
  page.on('pageerror', error => {
    console.error(`❌ PAGE ERROR: ${error.message}`);
  });
  
  // Wait for server to be ready
  console.log('Waiting for server at http://localhost:9583...');
  let retries = 10;
  while (retries > 0) {
    try {
      await page.goto('http://localhost:9583', { waitUntil: 'domcontentloaded', timeout: 5000 });
      break;
    } catch (e) {
      retries--;
      if (retries === 0) throw e;
      console.log(`Connection failed, retrying... (${retries} attempts left)`);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.log('Page loaded! Waiting for React to render...');
  
  // Wait for React to render
  await page.waitForTimeout(5000);
  
  // Check console logs
  page.on('console', msg => {
    console.log(`Browser console [${msg.type()}]:`, msg.text());
  });
  
  // Wait for modules to load
  try {
    await page.waitForSelector('a[href*="/module/"], [class*="card"]', { timeout: 10000 });
  } catch (e) {
    console.log('Module cards selector not found, but continuing...');
  }
  
  // Evaluate JavaScript to count modules AND check for errors
  const moduleCount = await page.evaluate(() => {
    // First check if React has rendered
    const root = document.getElementById('root');
    const rootContent = root ? root.innerHTML : '';
    
    // Count module cards by looking for links to /module/
    const moduleLinks = Array.from(document.querySelectorAll('a[href*="/module/"]'));
    const moduleCards = document.querySelectorAll('[class*="card"]');
    
    // Try to get modules from React component debug info
    const debugInfo = document.querySelector('[class*="bg-yellow"], [class*="yellow"], [class*="Debug"]');
    
    // Try to find all module numbers (1-20)
    const moduleNumbers = Array.from(document.querySelectorAll('[class*="rounded-full"], [class*="circle"], div')).filter(el => {
      const text = el.textContent.trim();
      return /^\d+$/.test(text) && parseInt(text) >= 1 && parseInt(text) <= 20;
    });
    
    // Check for any error messages
    const errors = Array.from(document.querySelectorAll('[class*="error"], [class*="Error"]'));
    
    return {
      rootHasContent: rootContent.length > 100,
      rootContentLength: rootContent.length,
      moduleLinksCount: moduleLinks.length,
      moduleCardsCount: moduleCards.length,
      moduleNumbersCount: moduleNumbers.length,
      debugText: debugInfo ? debugInfo.textContent : null,
      pageTitle: document.title,
      bodyText: document.body.innerText.substring(0, 1000),
      allModuleLinks: moduleLinks.map(link => link.getAttribute('href')).slice(0, 25),
      errorsFound: errors.map(e => e.textContent).slice(0, 5),
      rootHTML: rootContent.substring(0, 500)
    };
  });
  
  console.log('\n=== MODULE COUNT RESULTS ===');
  console.log('Root has content:', moduleCount.rootHasContent);
  console.log('Root content length:', moduleCount.rootContentLength);
  console.log('Module links found:', moduleCount.moduleLinksCount);
  console.log('Module cards found:', moduleCount.moduleCardsCount);
  console.log('Module numbers found:', moduleCount.moduleNumbersCount);
  console.log('Debug text:', moduleCount.debugText);
  console.log('Page title:', moduleCount.pageTitle);
  console.log('\nErrors found:', moduleCount.errorsFound);
  console.log('\nRoot HTML (first 500 chars):', moduleCount.rootHTML);
  console.log('\nModule links:', moduleCount.allModuleLinks);
  console.log('\nFirst 1000 chars of page:', moduleCount.bodyText);
  
  // Take a screenshot
  await page.screenshot({ path: 'modules-screenshot.png', fullPage: true });
  console.log('\nScreenshot saved to modules-screenshot.png');
  
  // Check if we have 20 modules
  const foundModules = Math.max(moduleCount.moduleLinksCount, moduleCount.moduleCardsCount, moduleCount.moduleNumbersCount);
  if (foundModules === 20) {
    console.log('\n✅ SUCCESS: Found exactly 20 modules!');
  } else {
    console.log(`\n❌ WARNING: Expected 20 modules, but found ${foundModules}`);
    console.log('   This might be a caching issue. Try clearing browser cache.');
  }
  
  // Keep browser open for a few seconds so user can see
  console.log('\nBrowser will stay open for 10 seconds so you can inspect...');
  await page.waitForTimeout(10000);
  
  await browser.close();
})();

