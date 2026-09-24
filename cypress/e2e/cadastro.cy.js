/// <reference types="cypress"/> 
import { faker } from '@faker-js/faker';

describe('Funcionalidade: cadastro hub de leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('deve realizar o cadastro com sucesso usando JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Ryan Leal');
        cy.get('#email').type(email)
        cy.get('#phone').type('1234567890')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', '/dashboard')
    });

    it('deve realizar o cadastro com sucesso usando faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('1234567890')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', '/dashboard')
        cy.get('#user-name').should('contain', nome)
    });




});