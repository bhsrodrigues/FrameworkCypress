class PerfilPage{
    get btnIconePerfil() {return cy.get('.header button > .header__user')};
    get btnVerPerfil() {return cy.get('.menu__content > a.button')};
    get txtNome() {return cy.get('#nome')};
    get txtTelefone() {return cy.get('#telefone')};
    get txtCidade() {return cy.get('#cidade')};
    get txtSobre() {return cy.get('#sobre')};
    get btnSalvar() {return cy.get('[data-test="submit-button"]')};

    verPerfil(){
        this.btnIconePerfil.click();
        this.btnVerPerfil.click();

    }

    clicarSalvarPerfil(){
        this.btnSalvar.click();
    }

    alterarPerfil(nome, telefone, cidade, sobre){
        this.txtNome.clear().type(nome);
        this.txtTelefone.clear().type(telefone);
        this.txtCidade.clear().type(cidade);
        this.txtSobre.clear().type(sobre);
        this.clicarSalvarPerfil();
    }
}

export default new PerfilPage();