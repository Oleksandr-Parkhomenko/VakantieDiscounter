var baseUrl = "https://www.vakantiediscounter.nl/";
var args = ["headless", "disable-gpu", "--window-size=1920,1080"];

module.exports = {
  baseUrl: baseUrl,
  browser: "chrome",
  arguments: args,
  logLevel: "info",
  timeout: 100000
};
