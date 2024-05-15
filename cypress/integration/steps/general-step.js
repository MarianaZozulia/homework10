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

}
export const generalStep=new GeneralStep();