export class BaseButtons {
    baseButton(name){
        return cy.get(`button`).contains(`${name}`);
    }
    baseModalCloseButton(){
        return cy.get(`button.close`);
    }

    baseModal(){
        return cy.get(`div.modal-content`);
    }

    successMessage(){
        return cy.get(`div.alert.alert-success`);
    }
}
export const baseButtons=new BaseButtons();

