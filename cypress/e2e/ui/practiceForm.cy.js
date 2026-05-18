import PracticeFormPage from '../../pages/PracticeFormPage';

describe('Practice Form Tests', () => {
  const formPage = new PracticeFormPage();

  beforeEach(() => {
    formPage.visit();
  });

  it('should submit form with all fields filled', () => {
    const { firstName, lastName, email, mobile, subject, hobby, currentAddress, state, city } = formPage.data;
    formPage.fillFullForm();
    formPage.submit();

    formPage.verifyModalVisible();
    formPage.verifyModalContains(firstName + ' ' + lastName);
    formPage.verifyModalContains(email);
    formPage.verifyModalContains(mobile);
    formPage.verifyModalContains(subject);
    formPage.verifyModalContains(hobby);
    formPage.verifyModalContains(currentAddress);
    formPage.verifyModalContains(state + ' ' + city);
  });

  it('should submit form with only required fields', () => {
    const { firstName, lastName, gender, mobile } = formPage.data;
    formPage.fillRequiredFields(firstName, lastName, gender, mobile);
    formPage.submit();

    formPage.verifyModalVisible();
    formPage.verifyModalContains(firstName + ' ' + lastName);
    formPage.verifyModalContains(mobile);
  });

  it('should not submit without required fields', () => {
    formPage.submit();

    formPage.verifyModalNotVisible();
  });

  it('should allow selecting multiple hobbies', () => {
    const { firstName, lastName, gender, mobile, hobby, hobbySecond } = formPage.data;
    formPage.fillRequiredFields(firstName, lastName, gender, mobile);
    formPage.selectHobby(hobby);
    formPage.selectHobby(hobbySecond);
    formPage.submit();

    formPage.verifyModalVisible();
    formPage.verifyModalContains(hobby);
    formPage.verifyModalContains(hobbySecond);
  });
});
