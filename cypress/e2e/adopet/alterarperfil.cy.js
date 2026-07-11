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

    it('Salvar perfil sem alterar dados',() => {
        PerfilPage.btnIconePerfil.click();
        PerfilPage.clicarSalvarPerfil();
    }),

    it('Salvar perfil após efetuar alterações', () => {
        PerfilPage.alterarPerfil("ASDF FDSA", "(11)912341234", "São Paulo", "Sobre mim lá, lá, lá");
    })
})