//import {APETControleAcessoElements} from '../../support/pages/adopet/dados-acesso-elements.js';
import HomePage from '../../support/pages/adopet/HomePage.js';


//const login = APETControleAcessoElements;

Cypress.Commands.add('acessarSite', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
})

Cypress.Commands.add('acessarPaginaLogin', () => {
//    allure.step("Acessar AdoPet");
    cy.acessarSite();
    HomePage.clicarFazerLogin();
})

Cypress.Commands.add('acessarPaginaCadastro', () =>{
    cy.acessarSite();
    HomePage.clicarFazerCadastro();
})

Cypress.Commands.add('confirmarHomeAdoPet', () => {
    cy.then(() => {
        cy.url().should('include', '/home');
    })
})
