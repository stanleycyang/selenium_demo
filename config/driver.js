var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    path = require('chromedriver').path,
    service = new chrome.ServiceBuilder(path).build();

chrome.setDefaultService(service);
// export the driver for use
module.exports = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
