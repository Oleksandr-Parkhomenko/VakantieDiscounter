var expect = require("chai").expect;

let destination;

class SunVertical_Page {
  get destinationDropdownButton() {
    return $("button#select-destination");
  }

  get countryListDropdown() {
    return $(".country-list");
  }

  get specifiedCountry() {
    return $(destination);
  }

  get departureDropdown() {
    return $("button#select-departure");
  }

  get monthsDropdown() {
    return $(".current-month.has-future");
  }

  get monthOptions() {
    return $("a[data-cy='month-option']");
  }

  get calendarDays() {
    return $(".date");
  }

  get durationDropdown() {
    return $("button#select-duration");
  }

  get specifiedDuration() {
    return $("li[data-cy='filter-list-item: 11-16']");
  }

  get checkResultsButton() {
    return $(".box-submit.btn.btn--theme--primary");
  }

  clickCheckResultsButton() {
    this.checkResultsButton.waitForClickable(3000);
    return this.checkResultsButton.click();
  }

  selectDuration() {
    this.specifiedDuration.waitForClickable(3000);
    return this.specifiedDuration.click();
  }

  clickDurationDropdownButton() {
    this.durationDropdown.waitForClickable(3000);
    return this.durationDropdown.click();
  }

  clickMonthsDropdownButton() {
    this.monthsDropdown.waitForClickable(3000);
    return this.monthsDropdown.click();
  }

  clickDepartureDropdownButton() {
    this.departureDropdown.waitForClickable(3000);
    return this.departureDropdown.click();
  }

  selectCountry(country) {
    destination = "=" + country;
    this.specifiedCountry.waitForDisplayed(3000);
    return this.specifiedCountry.click();
  }

  clickDestinationDropdownButton() {
    this.destinationDropdownButton.waitForClickable(3000);
    return this.destinationDropdownButton.click();
  }

  selectDayMonthAndYear(day, month, year) {
    let date = month + " " + year;
    this.monthOptions.waitForDisplayed(2000);
    let monthsList = $$('a[data-cy="month-option"]');
    for (let i = 0; i < monthsList.length; i++) {
      const monthElement = monthsList[i];
      if (monthElement.getText() == date) {
        monthElement.click();
        break;
      }
    }
    this.calendarDays.waitForDisplayed(2000);
    let daysList = $$(".date");
    for (let i = 0; i < daysList.length; i++) {
      const dayElement = daysList[i];
      if (dayElement.getText() == day) {
        dayElement.click();
        break;
      }
    }
  }

  checkUrl(url) {
    let currentUrl = browser.getUrl();
    expect(currentUrl, "URL does not match").to.equal(url);
  }

  searchForVacationOptions(country, day, month, year) {
    this.clickDestinationDropdownButton();
    this.selectCountry(country);
    this.clickDepartureDropdownButton();
    this.clickMonthsDropdownButton();
    this.selectDayMonthAndYear(day, month, year);
    this.clickDurationDropdownButton();
    this.selectDuration();
    this.clickCheckResultsButton();
  }
}

export default new SunVertical_Page();
