//import allure from "allure-cypress";
import * as allure from "allure-cypress";

class LoginPage{

    get txtEmail() { return cy.get('[data-test="input-loginEmail"]');}
    get txtSenha() {return cy.get('[data-test="input-loginPassword"]');}
    get btnLogin() {return cy.get('[data-test="submit-button"]');}

    
    clicarLogin(){
        this.btnLogin.click();
    }

    efetuarLogin(usuario, senha){
        this.txtEmail.clear().type(usuario);
        this.txtSenha.clear().type(senha);
        this.clicarLogin();
    }

}

export default new LoginPage();