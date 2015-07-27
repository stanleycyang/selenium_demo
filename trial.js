var browser = require('./config/driver'),
    webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

function handleFailure(err){
    console.error('Something went wrong\n', err.stack, '\n');
}

function findTutsPlusLink(){
    return browser.findElements(By.css('[href="http://code.tutsplus.com/"]')).then(function(result){
        return result[0];
    });
}

function clickLink(link){
    link.click();
}

function logTitle(){
    browser.getTitle().then(function(title){
        console.log('Current page title: ' + title);
    });
}

function closeBrowser(){
    browser.quit();
}

// Open up Bing in the browser
browser.get('http://www.bing.com');

// Get the title back asynchronously
var promise = browser.getTitle();
// Once the title is returned, console.log it
promise.then(function(title){
    console.log(title);
});

browser.get('http://www.google.com');

browser.findElement(By.name('q')).sendKeys('tuts+ code');
browser.findElement(By.name('btnG')).click();
browser.wait(findTutsPlusLink, 2000).then(clickLink).then(logTitle);


// Open wikipedia
browser.get('http://en.wikipedia.org/wiki/Wiki');
// Find the wiki links
browser.findElements(By.css('[href^="/wiki/"]')).then(function(links){
    console.log('Found', links.length, 'Wiki links.');
    browser.quit();
});
