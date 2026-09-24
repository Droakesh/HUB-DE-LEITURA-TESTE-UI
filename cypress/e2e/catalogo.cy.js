/// <reference types="cypress" /> 

describe('funcionalidade: catálogo de livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it.skip('deve clicar no botão adicionar à cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should('contain', 1)
    });

    it('deve clicar em todos os botões adicionar à cesta', () => {
        cy.get('.btn-primary').click({ multiple: true })
    });

    it('deve no primeiro botão adicionar à cesta', () => {
        cy.get('.btn-primary').first().click()
    });

    it('deve no último botão adicionar à cesta', () => {
        cy.get('.btn-primary').last().click()
    });

    it('deve clicar no terceiro botão adicionar à cesta', () => {
        cy.get('.btn-primary').eq(2).click()
    });
    it('deve clicar no quinto botão adicionar à cesta', () => {
        cy.get('.btn-primary').eq(4).click()
        cy.get('#global-alert-container').should('contain', 'A Metamorfose')
    });
    it('deve clicar no livro e direcionar para tela do mesmo', () => {
        cy.contains('Dom Quixote').click()
        cy.url().should('include', '/book-details.html')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
    });
});
