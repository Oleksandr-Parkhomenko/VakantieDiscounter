# Smoke Test Dé VakantieDiscounter

 ## Automation approach
 Test documentation with scenario "Smoke Test Dé VakantieDiscounter" to automate was provided in 'Test Engineer Assessment v2.pdf'
 To implement this task, JavaScript and webdriverio (https://webdriver.io/) were used, and for results reporting was used Allure report.

## Deliverables  

The following deliverables are available:
* automated application tests, available in `Vakantiediscounter/tests/bookVacantieTests.js`
* instructions and motivation, available in `README.md`

# How to run automated tests

To run the tests, the npm package needs to be installed.

## Installing the project

1. Install node.js from the official website (https://nodejs.org/en/download/)
2. Clone/download repository
3. Open terminal (available for your operating system)
4. Navigate to the cloned directory (cd - change folder that you are in )
5. Run the command `npm install` or `npm i`


## Tests execution
To run tests via terminal:
 * use `npm test` to run in Chrome browser
 * use another supported browser, e.g., chromium, edge: `npm test --browser edge`
 * to run the test in Headless mode, please uncomment line 58 in the `Vakantiediscounter/wdio.conf.js` file and use `npm test` to run in Chrome browser.
 
 ## Allure report
 Allure should be installed according to your OS: https://docs.qameta.io/allure/#_installing_a_commandline.

 To run report generation, it is necessary to start tests using the following command:
 ```
 npm test
 ```
 To generate the report, please navigate to `Vakantiediscounter` folder and run the following command :
 ```
 allure generate allure-results --clean && allure open  
 ```
 
 ### Project contains:
 1. Eight files with pages: Base_Page.js, Home_Page.js, SunVertical_Page.js, SearchResults_Page.js, ControlPrice_Page.js, TravelersDetails_Page.js, AdditionalOptions_Page.js, Overview_Page.js
 2. Every page contains methods with selectors on the current page
 3. Folder 'data', which contains files with predefined customers information
 4. Folder 'configuration' which contains the basic configuration for Chrome browser
 5. Folder 'tests' which contains test scenario of the happy flow
 
 ### Any other additional information:
 To make automation tests more robust, it will be nice to:
 - improve the element identifiers using ARIA Roles attributes.
