import '../../support/commands/commands-adopet';
//import * as allure from "allure-cypress";

import LoginPage from '../../support/pages/adopet/LoginPage.js'

describe('Página de Login', () => {
    beforeEach(() => {
        //allure.step("Efetuar login");
        cy.acessarPaginaLogin();
    })
    it('Login sem sucesso via Interface - Não preenchendo dados', () => {
        LoginPage.clicarLogin();
        cy.get(LoginPage.mensagemErro).should("exist");
    })

    it('Login sem sucesso via Interface - Preenchendo dados inválidos', () =>{
        LoginPage.efetuarLogin('asdfasdf@asdf.asdf', 'asdfadsf');
        cy.get(LoginPage.mensagemErro).should("exist");
    })

    it('Login com sucesso via interface', () => {
        LoginPage.efetuarLogin('asdfasdf@asdf.asdf', 'ASDFasdf1234');
    })

})