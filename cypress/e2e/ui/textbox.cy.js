import TextBoxPage from '../../pages/TextBoxPage';

describe('Text Box Form Tests', () => {
  const textBoxPage = new TextBoxPage();

  beforeEach(() => {
    textBoxPage.visit();
  });

  it('should submit form with all fields filled', () => {
    const { fullName, email, currentAddress, permanentAddress } = textBoxPage.data;
    textBoxPage.fillForm(fullName, email, currentAddress, permanentAddress);
    textBoxPage.submit();

    textBoxPage.verifyOutputName(fullName);
    textBoxPage.verifyOutputEmail(email);
    textBoxPage.verifyOutputCurrentAddress(currentAddress);
    textBoxPage.verifyOutputPermanentAddress(permanentAddress);
  });

  it('should submit form with only name and email', () => {
    const { partialName, partialEmail } = textBoxPage.data;
    textBoxPage.fillFullName(partialName);
    textBoxPage.fillEmail(partialEmail);
    textBoxPage.submit();

    textBoxPage.verifyOutputName(partialName);
    textBoxPage.verifyOutputEmail(partialEmail);
  });

  it('should show error for invalid email', () => {
    const { testUser, invalidEmail } = textBoxPage.data;
    textBoxPage.fillFullName(testUser);
    textBoxPage.fillEmail(invalidEmail);
    textBoxPage.submit();

    textBoxPage.verifyEmailFieldError();
  });

  it('should accept only full name field', () => {
    const { nameOnly } = textBoxPage.data;
    textBoxPage.fillFullName(nameOnly);
    textBoxPage.submit();

    textBoxPage.verifyOutputName(nameOnly);
  });

  it('should display output section only after submit', () => {
    const { submitCheckName } = textBoxPage.data;
    textBoxPage.verifyOutputNotContain('Name');
    textBoxPage.fillFullName(submitCheckName);
    textBoxPage.submit();

    textBoxPage.verifyOutputVisible();
  });
});
