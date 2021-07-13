class AdditionalOptions_Page {
    
  get openThirdStepButton() {
    return $(".btn.btn--theme--primary");
  }

  clickOpenThirdStepButton() {
    this.openThirdStepButton.waitForExist(20000);
    this.openThirdStepButton.scrollIntoView();
    this.openThirdStepButton.waitForClickable(3000);
    return this.openThirdStepButton.click();
  }
}
export default new AdditionalOptions_Page();
