import ModalDialogsPage from '../../pages/ModalDialogsPage';

describe('Modal Dialogs Tests', () => {
  const modalPage = new ModalDialogsPage();

  beforeEach(() => {
    modalPage.visit();
  });

  it('should open and verify small modal', () => {
    const { smallModalTitle, smallModalBody } = modalPage.data;
    modalPage.openSmallModal();

    modalPage.verifyModalVisible();
    modalPage.verifyModalTitle(smallModalTitle);
    modalPage.verifyModalBodyContains(smallModalBody);
  });

  it('should open and verify large modal', () => {
    const { largeModalTitle, largeModalBodySnippet } = modalPage.data;
    modalPage.openLargeModal();

    modalPage.verifyModalVisible();
    modalPage.verifyModalTitle(largeModalTitle);
    modalPage.verifyModalBodyContains(largeModalBodySnippet);
  });

  it('should close small modal', () => {
    modalPage.openSmallModal();
    modalPage.verifyModalVisible();
    modalPage.closeSmallModal();

    modalPage.verifyModalNotVisible();
  });

  it('should close large modal', () => {
    modalPage.openLargeModal();
    modalPage.verifyModalVisible();
    modalPage.closeLargeModal();

    modalPage.verifyModalNotVisible();
  });
});
