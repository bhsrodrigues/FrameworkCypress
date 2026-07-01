import {APETControleAcessoElements} from '../../support/pages/adopet/dados-acesso-elements.js';

const login = APETControleAcessoElements;

Cypress.Commands.add('acessarSite', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
})

Cypress.Commands.add('acessarPaginaLogin', () => {
    cy.acessarSite();
    cy.get(login.lnkFazerLogin).click();
})

Cypress.Commands.add('preencherDadosLogin', (email, senha) => {
    cy.acessarPaginaLogin();
    cy.get(login.txtLoginEmail).type(email);
    cy.get(login.txtLoginSenha).type(senha);
    cy.get(login.btnEntrar).click();

})