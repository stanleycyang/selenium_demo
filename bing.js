var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// Go to bing.com
driver.get('http://www.bing.com');
// Type in Stanley into the q 
driver.findElement(webdriver.By.name('q')).sendKeys('Stanley');
// Click go
driver.findElement(webdriver.By.name('go')).click();

// Waits for the response
driver.wait(function(){
    // Web driver
    return driver.getTitle().then(function(title){
        return title === 'Stanley - Bing';
    });
}, 1000);


driver.quit();

