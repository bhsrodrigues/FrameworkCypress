class CadastroPage{

    get txtCampoNome() { return cy.get('[data-test="input-name"]');}
    get txtCampoEmail() { return cy.get('[data-test="input-email"]');}
    get txtCampoSenha() { return cy.get('[data-test="input-password"]');}
    get txtConfirmeSenha() { return cy.get('[data-test="input-confirm-password"]');}
    get btnCadastrar() { return cy.get('[data-test="submit-button"]');}

    clicarBotaoCadastrar(){
        this.btnCadastrar.click();
    }

    preencherDadosCadastrais(nome, email, senha, confirmacao){
        this.txtCampoNome.clear().type(nome);
        this.txtCampoEmail.clear().type(email);
        this.txtCampoSenha.clear().type(senha);
        this.txtConfirmeSenha.clear().type(confirmacao);
        this.btnCadastrar.click();
    }

}

export default new CadastroPage();