export default class HomePage{
    static get signUpButton(){
        return cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`);
    }
    static get signUpName(){
        return cy.xpath(`//input[@id='signupName']`);
    }
    static get signUpLastName(){
        return cy.xpath(`//input[@id='signupLastName']`);
    }
    static get signUpEmail(){
        return cy.xpath(`//input[@id='signupEmail']`);
    }
    static get signUpPassword(){
        return cy.xpath(`//input[@id='signupPassword']`);
    }
    static get signUpRepeatPassword(){
        return cy.xpath(`//input[@id='signupRepeatPassword']`);
    }
    static get registerButton(){
        return cy.xpath(`//button[@class='btn btn-primary']`);
    }

    static get signInButton(){
        return cy.get(`button`).contains('Sign In');
    }

    static get signInEmail(){
        return cy.get(`input#signinEmail`);
    }

    static get signInPassword(){
        return cy.get(`input#signinPassword`);
    }

    static get loginButton(){
        return cy.get(`button`).contains('Login');
    }

    static createAccount(user){
        this.signUpName.type(user.name).should('have.value',user.name);
        this.signUpLastName.type(user.lastName).should('have.value', user.lastName);
        this.signUpEmail.type(user.email).should('have.value',user.email);
        this.signUpPassword.type(user.password).should('have.value',user.password);
        this.signUpRepeatPassword.type(user.password).should('have.value',user.password);
    }
}