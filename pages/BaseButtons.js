export class BaseModalButtons{
    baseModalButton(name){
        return cy.get(`button`).contains(`${name}`);
    }
    baseModalCloseButton(){
        return cy.get(`button.close`);
    }
}
export const baseModalButtons=new BaseModalButtons();

