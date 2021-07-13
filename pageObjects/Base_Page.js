let price;

export default class Base_Page {
  
  get priceEuroLabel() {
    return $(".no-marker.price.with-info > .price-number");
  }

  get priceCentsLabel() {
    return $(".no-marker.price.with-info > .price-decimals");
  }

  savePrice() {
    let euro;
    let cents;
    this.priceEuroLabel.waitForExist(5000);
    this.priceCentsLabel.waitForExist(5000);
    euro = this.priceEuroLabel.getText();
    cents = this.priceCentsLabel.getText();
    price = euro + cents;
  }

  getSavedPrice() {
    return price;
  }
}
