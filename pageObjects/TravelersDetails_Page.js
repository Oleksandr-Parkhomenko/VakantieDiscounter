class Travelersdetails_Page {
    
  get manSalutationRadiobutton() {
    return $("label[for='passenger-01_name-salutation-M']");
  }

  get firstPassangerFirstNameInput() {
    return $("input[name='passenger-01_name-first']");
  }

  get firstPassangerLastNameInput() {
    return $("input[name='passenger-01_name-last']");
  }

  get firstPassangerDayOfBirthDropdown() {
    return $("select[name='passenger-01_name-birthdate-1']");
  }

  get firstPassangerMonthOfBirthDropdown() {
    return $("select[name='passenger-01_name-birthdate-2']");
  }

  get firstPassangerYearOfBirthDropdown() {
    return $("select[name='passenger-01_name-birthdate-3']");
  }

  get womanSalutationRadiobutton() {
    return $("label[for='passenger-02_name-salutation-F']");
  }

  get secondPassangerFirstNameInput() {
    return $("input[name='passenger-02_name-first']");
  }

  get secondPassangerLastNameInput() {
    return $("input[name='passenger-02_name-last']");
  }

  get secondPassangerDayOfBirthDropdown() {
    return $("select[name='passenger-02_name-birthdate-1']");
  }

  get secondPassangerMonthOfBirthDropdown() {
    return $("select[name='passenger-02_name-birthdate-2']");
  }

  get secondPassangerYearOfBirthDropdown() {
    return $("select[name='passenger-02_name-birthdate-3']");
  }

  get mainBookerEmailInput() {
    return $("input[name='passenger-01_email']");
  }

  get mainBookerPostalCodeInput() {
    return $("input[name='passenger-01_address-postcode']");
  }

  get mainBookerHouseNumberInput() {
    return $("input#housenumber");
  }

  get mainBookerStreetInput() {
    return $("input[name='passenger-01_address-street']");
  }

  get mainBookerCityInput() {
    return $("input[name='passenger-01_address-city']");
  }

  get mainBookerPhoneInput() {
    return $("input[name='passenger-01_telephone-primary']");
  }

  get contactPersonNameInput() {
    return $("input[name='stay-home_name']");
  }

  get contactPersonPhoneInput() {
    return $("input[name='stay-home_tel']");
  }

  get openSecondStepButton() {
    return $(".btn.btn--theme--primary");
  }

  clickOpenSecondStepButton() {
    this.openSecondStepButton.waitForClickable(3000);
    return this.openSecondStepButton.click();
  }

  setContactPersonPhoneNumber(number) {
    this.contactPersonPhoneInput.waitForDisplayed(3000);
    return this.contactPersonPhoneInput.setValue(number);
  }

  setContactPersonName(name) {
    this.contactPersonNameInput.waitForDisplayed(3000);
    return this.contactPersonNameInput.setValue(name);
  }

  setMainBookerPhoneNumber(number) {
    this.mainBookerPhoneInput.waitForDisplayed(3000);
    return this.mainBookerPhoneInput.setValue(number);
  }

  setMainBookerCity(city) {
    this.mainBookerCityInput.waitForDisplayed(3000);
    return this.mainBookerCityInput.setValue(city);
  }

  setMainBookerStreet(street) {
    this.mainBookerStreetInput.waitForDisplayed(3000);
    return this.mainBookerStreetInput.setValue(street);
  }

  setMainBookerHouseNumber(houseNumber) {
    this.mainBookerHouseNumberInput.waitForDisplayed(3000);
    return this.mainBookerHouseNumberInput.setValue(houseNumber);
  }

  setMainBookerPostalCode(postalCode) {
    this.mainBookerPostalCodeInput.waitForDisplayed(3000);
    return this.mainBookerPostalCodeInput.setValue(postalCode);
  }

  setMainBookerEmail(email) {
    this.mainBookerEmailInput.waitForDisplayed(3000);
    return this.mainBookerEmailInput.setValue(email);
  }

  selectSecondPassangerYearOfBirth(year) {
    this.secondPassangerYearOfBirthDropdown.click();
    return this.secondPassangerYearOfBirthDropdown.selectByVisibleText(year);
  }

  selectSecondPassangerMonthOfBirth(month) {
    this.secondPassangerMonthOfBirthDropdown.click();
    return this.secondPassangerMonthOfBirthDropdown.selectByVisibleText(month);
  }

  selectSecondPassangerDayOfBirth(day) {
    this.secondPassangerDayOfBirthDropdown.click();
    return this.secondPassangerDayOfBirthDropdown.selectByVisibleText(day);
  }

  setSecondPassangerLastName(lastName) {
    this.secondPassangerLastNameInput.waitForDisplayed(3000);
    return this.secondPassangerLastNameInput.setValue(lastName);
  }

  setSecondPassangerFirstName(firstName) {
    this.secondPassangerFirstNameInput.waitForDisplayed(3000);
    return this.secondPassangerFirstNameInput.setValue(firstName);
  }

  clickWomanSalutationRadiobutton() {
    this.womanSalutationRadiobutton.waitForClickable(3000);
    return this.womanSalutationRadiobutton.click();
  }

  clickManSalutationRadiobutton() {
    this.manSalutationRadiobutton.waitForClickable(3000);
    return this.manSalutationRadiobutton.click();
  }

  setFirstPassangerFirstName(firstName) {
    this.firstPassangerFirstNameInput.waitForDisplayed(3000);
    return this.firstPassangerFirstNameInput.setValue(firstName);
  }

  setFirstPassangerLastName(lastName) {
    this.firstPassangerLastNameInput.waitForDisplayed(3000);
    return this.firstPassangerLastNameInput.setValue(lastName);
  }

  selectFirstPassangerDayOfBirth(day) {
    this.firstPassangerDayOfBirthDropdown.click();
    return this.firstPassangerDayOfBirthDropdown.selectByVisibleText(day);
  }

  selectFirstPassangerMonthOfBirth(month) {
    this.firstPassangerMonthOfBirthDropdown.click();
    return this.firstPassangerMonthOfBirthDropdown.selectByVisibleText(month);
  }

  selectFirstPassangerYearOfBirth(year) {
    this.firstPassangerYearOfBirthDropdown.click();
    return this.firstPassangerYearOfBirthDropdown.selectByVisibleText(year);
  }

  fillInFirstTravellerDetails(
    firstTravellerFirstName,
    firstTravellerLastName,
    firstTravellerDayOfBirth,
    firstTravellerMonthOfBirth,
    firstTravellerYearOfBirth
  ) {
    this.clickManSalutationRadiobutton();
    this.setFirstPassangerFirstName(firstTravellerFirstName);
    this.setFirstPassangerLastName(firstTravellerLastName);
    this.selectFirstPassangerDayOfBirth(firstTravellerDayOfBirth);
    this.selectFirstPassangerMonthOfBirth(firstTravellerMonthOfBirth);
    this.selectFirstPassangerYearOfBirth(firstTravellerYearOfBirth);
  }

  fillInSecondTravellerDetails(
    secondTravellerFirstName,
    secondTravellerLastName,
    secondTravellerDayOfBirth,
    secondTravellerMonthOfBirth,
    secondTravellerYearOfBirth
  ) {
    this.clickWomanSalutationRadiobutton();
    this.setSecondPassangerFirstName(secondTravellerFirstName);
    this.setSecondPassangerLastName(secondTravellerLastName);
    this.selectSecondPassangerDayOfBirth(secondTravellerDayOfBirth);
    this.selectSecondPassangerMonthOfBirth(secondTravellerMonthOfBirth);
    this.selectSecondPassangerYearOfBirth(secondTravellerYearOfBirth);
  }

  fillInMainBookerDetails(
    mainBookerPostalCode,
    mainBookerHouseNumber,
    mainBookerStreet,
    mainBookerCity,
    mainBookerEmail,
    mainBookerPhone
  ) {
    this.setMainBookerEmail(mainBookerEmail);
    this.setMainBookerPostalCode(mainBookerPostalCode);
    this.setMainBookerHouseNumber(mainBookerHouseNumber);
    this.setMainBookerStreet(mainBookerStreet);
    this.setMainBookerCity(mainBookerCity);
    this.setMainBookerPhoneNumber(mainBookerPhone);
  }

  fillInContactPersonDetails(contactPersonName, contactPersonPhone) {
    this.setContactPersonName(contactPersonName);
    this.setContactPersonPhoneNumber(contactPersonPhone);
  }
}
export default new Travelersdetails_Page();
