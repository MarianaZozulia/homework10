import BasePage from "./BasePage";

export default class FuelExpensesPage extends BasePage{

    static get FuelExpensesTitle(){
        return cy.get(`h1`).contains('Fuel expenses');
    }

    static get carSelectDropdown(){
        return cy.get(`button#carSelectDropdown`);
    }

    static get addAnExpenseButton(){
        return cy.get(`button`).contains('Add an expense');
    }

    static get EmptyExpensesIcon(){
        return cy.get(`svg[_ngcontent-prn-c72]`);
    }

    static get EmptyExpensesText(){
        return cy.get(`h3.h3 panel-empty_message`);
    }

    static get garageLink(){
        return cy.get(`a[_ngcontent-prn-c72]`).contains("your garage");
    }

    static get EmptyExpensesFiledIcon(){
        return cy.get(`svg[_ngcontent-whv-c82]`);
    }

    static get addAnExpenseModalTitle(){
        return cy.get(`h4`).contains('Add an expense');
    }

    static get expensesDateColumn(){
        return cy.get(`tr > th:nth-of-type(1)`);
    }

    static get expensesMileageColumn(){
        return cy.get(`tr > th:nth-of-type(2)`);
    }

    static get expensesLitersUsedColumn(){
        return cy.get(`tr > th:nth-of-type(3)`);
    }

    static get expensesTotalCostColumn(){
        return cy.get(`tr > th:nth-of-type(4)`);
    }
    static get expensesDate(){
        return cy.get(`tr > td:nth-of-type(1)`);
    }
    static get expensesMileage(){
        return cy.get(`tr > td:nth-of-type(2)`);
    }

    static get expensesLitersUsed(){
        return cy.get(`tr > td:nth-of-type(3)`);
    }
    static get expensesTotalCost(){
        return cy.get(`tr > td:nth-of-type(4)`);
    }
    static get editAnExpenseModalTitle(){
        return cy.get(`h4`).contains('Edit an expense');
    }

    static get removeExpenseButton(){
        return cy.get(`button.btn-delete`);
    }

    static get editExpenseButton(){
        return cy.get(`button.btn-edit`);
    }

    static get removeExpenseModalTitle(){
        return cy.get(`h4`).contains('Remove entry');
    }

    static get removeExpenseModalButton(){
        return cy.get(`button`).contains('Remove');
    }

    static get removeExpenseModalText(){
        return cy.get(`p[_ngcontent-whv-c80]`);
    }

}