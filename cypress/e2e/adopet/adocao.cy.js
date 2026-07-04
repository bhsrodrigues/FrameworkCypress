import AdocaoPage from '../../support/pages/adopet/AdocaoPage'
import '../../support/commands/commands-adopet'
import LoginPage from '../../support/pages/adopet/LoginPage'
import HomePage from '../../support/pages/adopet/HomePage'
import * as allure from "allure-cypress";
import {adocao} from '../fixtures/adopet-adocao.json'

describe('Realizar adocao', () => {



    beforeEach(() => {
        cy.acessarSite();
        HomePage.clicarFazerLogin();
        allure.step("Efetuar login", () => {
            LoginPage.efetuarLogin('asdfasdf@asdf.asdf', 'ASDFasdf1234');
            cy.confirmarHomeAdoPet();
        });
        allure.step("Acessar tela de mensagens para adoção", () => {
            AdocaoPage.acessarOpcaoAdocao();
        })
        
    })

    it('Efetuar tentativa de adoção sem preencher nenhum campo',() =>{

        AdocaoPage.clicarBotaoEnviar();
    }),

    it('Efetuar tentativa de adoção preenchendo campos com dados inválidos',() =>{
        AdocaoPage.enviarFormularioComMensagem(adocao.nome,"(1)1 989898-6856", "Pet", "Mensagem enviada");
    }),

    it('Efetuar tentativa de adoção sem informar mensagem',() =>{
        AdocaoPage.enviarFormularioSemMensagem(adocao.nome,adocao.telefone, "Pet");
    }),

    it('Efetuar tentativa de adoção com sucesso',() =>{
        cy.clock(new Date());
        var mensagem = `Mensagem adoção. Enviada em ${new Date().toLocaleString('pt-BR')}`;
        var nomePet = "Pet"
        AdocaoPage.enviarFormularioComMensagem(adocao.nome,adocao.telefone,nomePet,mensagem);
        cy.confirmarHomeAdoPet();
        allure.step('Mensagem enviada com sucesso',() => {
            AdocaoPage.acessarOpcaoAdocao();
            AdocaoPage.sectionMensagensEviadas.should('include.text', mensagem);
        }); 
        
    })

})