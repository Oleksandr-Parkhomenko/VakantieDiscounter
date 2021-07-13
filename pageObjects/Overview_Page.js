import Base_Page from "./Base_Page";

var expect = require("chai").expect;

class Overview_Page extends Base_Page {
  get totalPriceEuroLabel() {
    return $(
      "td.rowtotal > div > span.price-block__amount > span:nth-child(1)"
    );
  }

  get totalPriceCentsLabel() {
    return $(
      "td.rowtotal > div > span.price-block__amount > span:nth-child(2) > span"
    );
  }

  confirmThatPriceIsCorrect() {
    let euro;
    let cents;
    let totalPrice;
    let expectedPrice;

    this.totalPriceEuroLabel.waitForDisplayed(3000);
    this.totalPriceCentsLabel.waitForDisplayed(3000);
    this.totalPriceEuroLabel.scrollIntoView();
    euro = this.totalPriceEuroLabel.getText();
    cents = this.totalPriceCentsLabel.getText();
    totalPrice = euro + "," + cents;
    expectedPrice = super.getSavedPrice();
    expect(totalPrice, "Total price is different from expected").to.equal(
      expectedPrice
    );
  }
}
export default new Overview_Page();
