var expect = require("chai").expect;

let selector;

class SearchResults_Page {
  
  get transportArrangedButton() {
    return $(".transport-type-menu > .transport-arranged");
  }

  get airportAndCaretype() {
    return $(selector);
  }

  get firstAccomodationViewButton() {
    return $("li:first-of-type .btn.btn--theme--primary");
  }

  get tripOptionsList() {
    return $(".search-header > .search-facets");
  }

  clickFirstAccomodationViewButton() {
    this.firstAccomodationViewButton.waitForClickable(3000);
    return this.firstAccomodationViewButton.click();
  }

  selectAirportAndCareType(airport, careType) {
    if (airport) {
      selector = ".options-list__label-text=" + airport;
      this.airportAndCaretype.waitForClickable();
      this.airportAndCaretype.click();
    }
    if (careType) {
      selector = ".options-list__label-text=" + careType;
      this.airportAndCaretype.waitForClickable();
      this.airportAndCaretype.click();
    }
  }

  confirmFlightAirportCareTypeAreSelected(flight, airport, careType) {
    this.tripOptionsList.waitForDisplayed(3000);
    let options = this.tripOptionsList.getText();

    expect(options, "Flight is not included in this trip").to.include(
      flight.toUpperCase()
    );
    expect(options, "Wrong airport is selected").to.include(
      airport.toUpperCase()
    );
    expect(options, "Wrong care type is selected").to.include(
      careType.toUpperCase()
    );
  }
}
export default new SearchResults_Page();
