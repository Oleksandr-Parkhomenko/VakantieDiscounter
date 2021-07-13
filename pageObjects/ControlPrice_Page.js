import Base_Page from "./Base_Page";

class ControlPrice_Page extends Base_Page{

  get controlPriceButton() {
    return $("a[data-cy='price-check-button']");
  }

  get bookButton() {
    return $("button#offer-receipt-bookbutton");
  }

  clickControlPriceButton() {
    this.controlPriceButton.waitForClickable(3000);
    return this.controlPriceButton.click();
  }
  
  clickBookButton() {
    this.bookButton.waitForExist(5000);
    this.bookButton.scrollIntoView();
    this.bookButton.waitForClickable(5000);
    return this.bookButton.click();
  }

  saveExpectedPrice(){
    super.savePrice();
  }
}

export default new ControlPrice_Page();