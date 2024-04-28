import HomePage from "../pages/HomePage";
import BasePage from "../pages/BasePage";
import {baseButtons} from "../pages/BaseButtons";

export class GeneralStep{
    login(email,password){
      HomePage.signInButton.click();
      HomePage.signInEmail.type(email);
      HomePage.signInPassword.type(password);
      baseButtons.baseButton('Login').click();
    }
    verifyLoginButtonIsVisible(){
        BasePage.sidebarLogOutItem.should('be.visible');

    }

    /*datePicker(day, month, year){
        cy.get(`select[title="Select month"]`).select(month);
        cy.get(`select[title="Select year"]`).select(year);
        cy.get(`ngb-datepicker-month`).within(()=>{
            cy.get(`div[ngbdatepickerdayview]`).invoke
            ('val').should(day).click();
        })

    }*/
}
export const generalStep=new GeneralStep();