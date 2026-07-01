import '../../support/commands/commands-adopet';

import {APETControleAcessoElements} from '../../support/pages/adopet/dados-acesso-elements.js';

const login = APETControleAcessoElements;

describe('Página de Login', () => {
    it('Login sem sucesso via Interface - Não preenchendo dados', () => {
        cy.acessarPaginaLogin();
        cy.get(login.btnEntrar).click();

    })

    it('Login sem sucesso via Interface - Preenchendo dados inválidos', () =>{
        cy.preencherDadosLogin('asdffdsa@asdf.fdsa', 'asdfadsf');
    })

    it('Login com sucesso via interface', () => {
        cy.preencherDadosLogin('asdfadsf@adsf.asdf', 'ASDFasdf1234');
    })

})