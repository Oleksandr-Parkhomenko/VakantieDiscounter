class Home_Page {
  
  get acceptCookiesButton() {
    return $("button[data-cy='cookie-button--all-ok']");
  }

  get sunVerticalViewButton() {
    return $(".sun.vertical .btn.btn--theme--primary");
  }

  clickAcceptCookiesButton() {
    this.acceptCookiesButton.waitForClickable(3000);
    return this.acceptCookiesButton.click();
  }

  clickSunVerticalViewButton() {
    this.sunVerticalViewButton.waitForClickable(3000);
    return this.sunVerticalViewButton.click();
  }
}
export default new Home_Page();
