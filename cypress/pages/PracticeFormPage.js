class PracticeFormPage {
  url = '/automation-practice-form';

  data = {
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@test.com',
    gender: 'Male',
    mobile: '1234567890',
    dateOfBirth: '15 May 1995',
    subject: 'Maths',
    hobby: 'Sports',
    hobbySecond: 'Reading',
    currentAddress: '742 Evergreen Terrace, Springfield',
    state: 'NCR',
    city: 'Delhi',
    picture: 'sample.png',
  };

  locators = {
    firstNameInput: '#firstName',
    lastNameInput: '#lastName',
    emailInput: '#userEmail',
    genderMale: 'label[for="gender-radio-1"]',
    genderFemale: 'label[for="gender-radio-2"]',
    genderOther: 'label[for="gender-radio-3"]',
    mobileInput: '#userNumber',
    dateOfBirthInput: '#dateOfBirthInput',
    subjectInput: '#subjectsInput',
    hobbySports: 'label[for="hobbies-checkbox-1"]',
    hobbyReading: 'label[for="hobbies-checkbox-2"]',
    hobbyMusic: 'label[for="hobbies-checkbox-3"]',
    uploadPicture: '#uploadPicture',
    currentAddressInput: '#currentAddress',
    stateDropdown: '#state',
    stateInput: '#state input',
    cityDropdown: '#city',
    cityInput: '#city input',
    submitButton: '#submit',
    modalTitle: '#example-modal-sizes-title-lg',
    modalTable: '.table-responsive table',
    modalClose: '#closeLargeModal',
  };

  visit() {
    cy.visit(this.url);
  }

  fillFirstName(name) {
    cy.get(this.locators.firstNameInput).type(name);
  }

  fillLastName(name) {
    cy.get(this.locators.lastNameInput).type(name);
  }

  fillEmail(email) {
    cy.get(this.locators.emailInput).type(email);
  }

  selectGender(gender) {
    if (gender === 'Male') cy.get(this.locators.genderMale).click();
    else if (gender === 'Female') cy.get(this.locators.genderFemale).click();
    else cy.get(this.locators.genderOther).click();
  }

  fillMobile(number) {
    cy.get(this.locators.mobileInput).type(number);
  }

  fillSubject(subject) {
    cy.get(this.locators.subjectInput).type(subject);
    cy.get('.subjects-auto-complete__option').first().click();
  }

  selectHobby(hobby) {
    if (hobby === 'Sports') cy.get(this.locators.hobbySports).click();
    else if (hobby === 'Reading') cy.get(this.locators.hobbyReading).click();
    else cy.get(this.locators.hobbyMusic).click();
  }

  fillCurrentAddress(address) {
    cy.get(this.locators.currentAddressInput).type(address);
  }

  selectState(state) {
    cy.get(this.locators.stateDropdown).click();
    cy.get(this.locators.stateInput).type(state + '{enter}');
  }

  selectCity(city) {
    cy.get(this.locators.cityDropdown).click();
    cy.get(this.locators.cityInput).type(city + '{enter}');
  }

  submit() {
    cy.get(this.locators.submitButton).click();
  }

  fillRequiredFields(firstName, lastName, gender, mobile) {
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.selectGender(gender);
    this.fillMobile(mobile);
  }

  fillFullForm() {
    const d = this.data;
    this.fillFirstName(d.firstName);
    this.fillLastName(d.lastName);
    this.fillEmail(d.email);
    this.selectGender(d.gender);
    this.fillMobile(d.mobile);
    this.fillSubject(d.subject);
    this.selectHobby(d.hobby);
    this.fillCurrentAddress(d.currentAddress);
    this.selectState(d.state);
    this.selectCity(d.city);
  }

  verifyModalVisible() {
    cy.get(this.locators.modalTitle).should('be.visible').and('have.text', 'Thanks for submitting the form');
  }

  verifyModalContains(text) {
    cy.get(this.locators.modalTable).should('contain', text);
  }

  verifyModalNotVisible() {
    cy.get('body').should('not.have.descendants', '.modal-dialog');
  }

  closeModal() {
    cy.get('body').type('{esc}');
    cy.get(this.locators.modalTitle, { timeout: 6000 }).should('not.be.visible');
  }

  verifyFieldValidationError(locator) {
    cy.get(locator).should('have.css', 'border-color', 'rgb(220, 53, 69)');
  }
}

export default PracticeFormPage;
