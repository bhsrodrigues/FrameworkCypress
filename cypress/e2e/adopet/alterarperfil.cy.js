import PerfilPage from '../../support/pages/adopet/PerfilPage'
import '../../support/commands/commands-adopet'
import LoginPage from '../../support/pages/adopet/LoginPage'
import HomePage from '../../support/pages/adopet/HomePage'

describe('Alteração de perfil', () => {
    beforeEach(() => {
        cy.acessarSite();
        HomePage.clicarFazerLogin();
        LoginPage.efetuarLogin('asdfasdf@asdf.asdf', 'ASDFasdf1234');
        cy.confirmarHomeAdoPet();
        PerfilPage.verPerfil();
    })

    it('Salvar perfil sem todos dados preenchidos',() => {
        PerfilPage.btnIconePerfil.click();
        PerfilPage.apagarDados();
        PerfilPage.clicarSalvarPerfil();
        cy.get(PerfilPage.mensagemErro).should("exist");
    }),

    it('Salvar perfil após efetuar alterações', () => {
        PerfilPage.alterarPerfil("ASDF FDSA", "(11)912341234", "São Paulo", "Sobre mim lá, lá, lá");
    })
})