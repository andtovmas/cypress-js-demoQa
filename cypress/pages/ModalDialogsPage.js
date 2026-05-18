class ModalDialogsPage {
  url = '/modal-dialogs';

  data = {
    smallModalTitle: 'Small Modal',
    largeModalTitle: 'Large Modal',
    smallModalBody: 'This is a small modal. It has very less content',
    largeModalBodySnippet: 'Lorem Ipsum is simply dummy text',
  };

  locators = {
    smallModalButton: '#showSmallModal',
    largeModalButton: '#showLargeModal',
    closeSmallModal: '#closeSmallModal',
    closeLargeModal: '#closeLargeModal',
    modalTitle: '.modal-title',
    modalBody: '.modal-body',
    modalOverlay: '.modal.show',
  };

  visit() {
    cy.visit(this.url);
  }

  openSmallModal() {
    cy.get(this.locators.smallModalButton).click();
  }

  openLargeModal() {
    cy.get(this.locators.largeModalButton).click();
  }

  closeSmallModal() {
    cy.get(this.locators.closeSmallModal).click();
  }

  closeLargeModal() {
    cy.get(this.locators.closeLargeModal).click();
  }

  verifyModalTitle(title) {
    cy.get(this.locators.modalTitle).should('be.visible').and('have.text', title);
  }

  verifyModalBodyContains(text) {
    cy.get(this.locators.modalBody).should('contain', text);
  }

  verifyModalNotVisible() {
    cy.get(this.locators.modalOverlay).should('not.exist');
  }

  verifyModalVisible() {
    cy.get(this.locators.modalOverlay).should('exist');
  }
}

export default ModalDialogsPage;
