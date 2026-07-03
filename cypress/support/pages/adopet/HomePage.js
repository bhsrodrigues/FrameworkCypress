class HomePage{
    get linkFacaCadastro() {return cy.get('[data-test="register-button"]'); }
    get linkFazerLogin() { return cy.get('[data-test="login-button"]'); }
    get btnLogout() {return cy.get('.menu__content > button'); }

    clicarFazerCadastro(){
        this.linkFacaCadastro.click();
    }

    clicarFazerLogin(){
        this.linkFazerLogin.click();
    }

    logout(){
        this.btnLogout.click();
    }
}

export default new HomePage();