import '../../support/commands/commands-adopet';

import {APETControleAcessoElements} from '../../support/pages/adopet/dados-acesso-elements.js';
import LoginPage from '../../support/pages/adopet/LoginPage.js'

const login = APETControleAcessoElements;

describe('Página de Login', () => {
    beforeEach(() => {
        cy.acessarPaginaLogin();
    })
    it('Login sem sucesso via Interface - Não preenchendo dados', () => {
        
        LoginPage.clicarLogin();
    })

    it('Login sem sucesso via Interface - Preenchendo dados inválidos', () =>{
        LoginPage.efetuarLogin('asdffdsa@asdf.fdsa', 'asdfadsf');
    })

    it('Login com sucesso via interface', () => {
        LoginPage.efetuarLogin('asdfadsf@adsf.asdf', 'ASDFasdf1234');
    })

})