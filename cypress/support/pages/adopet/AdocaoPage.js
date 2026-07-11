import * as allure from "allure-cypress";

class AdocaoPage{

    get btnMensagem() { return cy.get('.header div > .header__message');}
    get txtNome() { return cy.get('#name');}
    get txtTelefone() { return cy.get('#phone');}
    get txtNomeAnimal() { return cy.get('#petName');}
    get txtMensagem() { return cy.get('#msg');}
    get btnEnviar() { return cy.get('[data-test="submit-button"]');}
    get sectionMensagensEviadas() { return cy.get('.enviadas > ul.enviadas');}

    acessarOpcaoAdocao(){
        
        //allure.step("Acessar tela de mensagens para adoção", () => {
            this.btnMensagem.click();
            return this;
        //});
        
    }

    clicarBotaoEnviar(){
        this.btnEnviar.click();
        return this;
    }

    preencherDadosAdocao(nome, telefone, nomePet){
        this.txtNome.clear().type(nome);
        this.txtTelefone.clear().type(telefone);
        this.txtNomeAnimal.clear().type(nomePet);
    }

    enviarFormularioSemMensagem(nome, telefone, nomePet){
        allure.step("Enviar mensagem com dados preenchidos corretamente", (ctx) => {
            ctx.parameter("Nome", nome);
            ctx.parameter("Telefone", telefone);
            ctx.parameter("Nome Pet", nomePet);
            this.preencherDadosAdocao(nome, telefone, nomePet);
            this.clicarBotaoEnviar();
        });
    }

    enviarFormularioComMensagem(nome, telefone, nomePet, mensagem){
        allure.step("Enviar mensagem com dados preenchidos corretamente", (ctx) => {
            ctx.parameter("Nome", nome);
            ctx.parameter("Telefone", telefone);
            ctx.parameter("Nome Pet", nomePet);
            ctx.parameter("Mensagem", mensagem);
            this.preencherDadosAdocao(nome, telefone, nomePet);
            this.txtMensagem.type(mensagem);
            this.clicarBotaoEnviar();
        });
    }

    mensagensEnviadas(){
        return this.sectionMensagensEviadas;
    }

}

export default new AdocaoPage();