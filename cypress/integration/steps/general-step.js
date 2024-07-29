import HomePage from "../pages/HomePage";
import BasePage from "../pages/BasePage";
import {baseButtons} from "../pages/BaseButtons";

export class GeneralStep{

    openMainPage(){
      cy.visit(Cypress.env('baseUrl'));
    }

    openExpensesPage(){
      cy.visit('/panel/expenses');
    }
    login(email,password){
      HomePage.signInButton.click();
      HomePage.signInEmail.type(email);
      HomePage.signInPassword.type(password);
      baseButtons.baseButton('Login').click();
    }
    verifyLoginButtonIsVisible(){
        BasePage.sidebarLogOutItem.should('be.visible');

    }

}
export const generalStep=new GeneralStep();