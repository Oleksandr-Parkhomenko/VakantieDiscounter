var config = require("../configuration/test.js");
var travelersData = require("../data/travelersData.js");
var sunVerticalData = require("../data/sunVerticalData.js");
var searchResultsData = require("../data/searchResultsData.js");
import Home_Page from "../pageObjects/Home_Page";
import SunVertical_Page from "../pageObjects/SunVertical_Page";
import SearchResults_Page from "../pageObjects/SearchResults_Page";
import ControlPrice_Page from "../pageObjects/ControlPrice_Page";
import TravelersDetails_Page from "../pageObjects/TravelersDetails_Page";
import AdditionalOptions_Page from "../pageObjects/AdditionalOptions_Page";
import Overview_Page from "../pageObjects/Overview_Page";

before(() => {
  browser.maximizeWindow();
  browser.url(config.baseUrl);
  Home_Page.clickAcceptCookiesButton();
});

describe("Smoke Test Dé VakantieDiscounter.", () => {

  it("Happy flow customer journey", () => {
    let url = config.baseUrl + "zonvakantie";
    Home_Page.clickSunVerticalViewButton();
    SunVertical_Page.checkUrl(url);
    SunVertical_Page.searchForVacationOptions(sunVerticalData.destination, sunVerticalData.day, sunVerticalData.month, sunVerticalData.year);
    SearchResults_Page.selectAirportAndCareType(searchResultsData.airport, searchResultsData.careType);
    SearchResults_Page.confirmFlightAirportCareTypeAreSelected(searchResultsData.flight, searchResultsData.airport, searchResultsData.careType);
    SearchResults_Page.clickFirstAccomodationViewButton();
    ControlPrice_Page.clickControlPriceButton();
    ControlPrice_Page.saveExpectedPrice();
    ControlPrice_Page.clickBookButton();
    TravelersDetails_Page.fillInFirstTravellerDetails(travelersData.firstTravellerFirstName, travelersData.firstTravellerLastName, travelersData.firstTravellerDayOfBirth, travelersData.firstTravellerMonthOfBirth, travelersData.firstTravellerYearOfBirth);
    TravelersDetails_Page.fillInSecondTravellerDetails(travelersData.secondTravellerFirstName, travelersData.secondTravellerLastName, travelersData.secondTravellerDayOfBirth, travelersData.secondTravellerMonthOfBirth, travelersData.secondTravellerYearOfBirth);
    TravelersDetails_Page.fillInMainBookerDetails(travelersData.mainBookerPostalCode, travelersData.mainBookerHouseNumber, travelersData.mainBookerStreet, travelersData.mainBookerCity, travelersData.mainBookerEmail, travelersData.mainBookerPhone);
    TravelersDetails_Page.fillInContactPersonDetails(travelersData.contactPersonName, travelersData.contactPersonPhone);
    TravelersDetails_Page.clickOpenSecondStepButton();
    AdditionalOptions_Page.clickOpenThirdStepButton();
    Overview_Page.confirmThatPriceIsCorrect();
  });
});
