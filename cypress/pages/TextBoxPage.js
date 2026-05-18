class TextBoxPage {
  url = '/text-box';

  data = {
    fullName: 'John Doe',
    email: 'john@example.com',
    currentAddress: '123 Main St',
    permanentAddress: '456 Oak Ave',
    nameOnly: 'Only Name',
    partialName: 'Jane Smith',
    partialEmail: 'jane@example.com',
    invalidEmail: 'invalid-email',
    submitCheckName: 'Visible After Submit',
    testUser: 'Test User',
  };

  locators = {
    fullNameInput: '#userName',
    emailInput: '#userEmail',
    currentAddressInput: '#currentAddress',
    permanentAddressInput: '#permanentAddress',
    submitButton: '#submit',
    output: '#output',
    outputName: '#output #name',
    outputEmail: '#output #email',
    outputCurrentAddress: '#output #currentAddress',
    outputPermanentAddress: '#output #permanentAddress',
  };

  visit() {
    cy.visit(this.url);
  }

  fillFullName(name) {
    cy.get(this.locators.fullNameInput).type(name);
  }

  fillEmail(email) {
    cy.get(this.locators.emailInput).type(email);
  }

  fillCurrentAddress(address) {
    cy.get(this.locators.currentAddressInput).type(address);
  }

  fillPermanentAddress(address) {
    cy.get(this.locators.permanentAddressInput).type(address);
  }

  submit() {
    cy.get(this.locators.submitButton).click();
  }

  fillForm(name, email, currentAddress, permanentAddress) {
    this.fillFullName(name);
    this.fillEmail(email);
    this.fillCurrentAddress(currentAddress);
    this.fillPermanentAddress(permanentAddress);
  }

  verifyOutputName(name) {
    cy.get(this.locators.outputName).should('contain', name);
  }

  verifyOutputEmail(email) {
    cy.get(this.locators.outputEmail).should('contain', email);
  }

  verifyOutputCurrentAddress(address) {
    cy.get(this.locators.outputCurrentAddress).should('contain', address);
  }

  verifyOutputPermanentAddress(address) {
    cy.get(this.locators.outputPermanentAddress).should('contain', address);
  }

  verifyEmailFieldError() {
    cy.get(this.locators.emailInput).should('have.css', 'border-color', 'rgb(255, 0, 0)');
  }

  verifyOutputVisible() {
    cy.get(this.locators.output).should('be.visible');
  }

  verifyOutputNotContain(text) {
    cy.get(this.locators.output).should('not.contain', text);
  }
}

export default TextBoxPage;
