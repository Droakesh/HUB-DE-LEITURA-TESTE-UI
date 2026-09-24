describe('Contato', () => {

  beforeEach(() => {
      cy.visit('index.html')
      
  it('deve preencher o formulário de contato com sucesso', () => {
    });

    cy.get('[name="name"]').type('Ryan Leal');
    cy.get('[name="email"]').type('lealryan@test')
    cy.get('[name="subject"]').select('Suporte Técnico');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    ///resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist');
  });

  it('deve exibir mensagem de erro ao enviar nome ', () => {
    cy.get('[name="name"]').clear();
    cy.get('[name="email"]').type('lealryan@test')
    cy.get('[name="subject"]').select('Suporte Técnico');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.');
  });

  it('deve exibir mensagem de erro ao enviar email vazio ', () => {
    cy.get('[name="name"]').type('Ryan Leal');
    cy.get('[name="email"]').clear();
    cy.get('[name="subject"]').select('Suporte Técnico');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.');
  });

  it('deve exibir mensagem de erro ao enviar assunto vazio ', () => {
    cy.get('[name="name"]').type('Ryan Leal');
    cy.get('[name="email"]').type('lealryan@test')
    //cy.get('[name="subject"]').select('Suporte Técnico');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.');
  });

  it('deve exibir mensagem de erro ao enviar mensagem vazia ', () => {
    cy.get('[name="name"]').type('Ryan Leal');
    cy.get('[name="email"]').type('lealryan@test')
    cy.get('[name="subject"]').select('Suporte Técnico');
    cy.get('[name="message"]').clear();
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.');
  });

});