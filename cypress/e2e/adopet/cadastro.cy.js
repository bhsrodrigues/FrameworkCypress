import '../../support/commands/commands-adopet'

import HomePage from '../../support/pages/adopet/HomePage.js'
import CadastroPage from '../../support/pages/adopet/CadastroPage.js'

describe('Cadastro de interessados em adoção', () =>{
    beforeEach (()=>{
        cy.acessarPaginaCadastro();
    })
    it('Tentativa de cadastro sem informar nenhum dado', () => {
        CadastroPage.clicarBotaoCadastrar();
    }),

    it('Tentativa de cadastro informando dados em formatos inválidos', () => {
        CadastroPage.preencherDadosCadastrais("Nome Completo",
            "email.email@email.email_email@com", "senha1234", "senha1234")
    }),

    it('Tentativa de cadastro informando senha incompleta', () => {
        CadastroPage.preencherDadosCadastrais("Nome Completo",
            "email.email@email.email.com", "senha1234", "senha4321")
    }),

    it('Tentativa de cadastrado informando confirmação de senha incorreta', () => {
        CadastroPage.preencherDadosCadastrais("Nome Completo",
            "email.email@email.email.com", "Senha1234", "Senha4321")
    })

    it('Cadastro realizado com sucesso', () => {
        CadastroPage.preencherDadosCadastrais("Nome Completo",
            "email.email@email.email.com", "Senha1234", "Senha1234")
    })

})