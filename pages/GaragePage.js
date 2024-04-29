import BasePage from "./BasePage";

export default class GaragePage extends BasePage{

    static get garageTitle(){
        return cy.get(`h1`).contains('Garage');
    }

    static get emptyGarageIcon(){
        return cy.get(`svg[_ngcontent-prn-c84]`);
    }
    static get emptyGarageText(){
        return cy.get(`p.h3.panel-empty_message`);
    }

    static get addCarModalTitle(){
        return cy.get(`h4`).contains('Add a car');
    }

// could be used for update car brand
    static get addCarBrand(){
        return cy.get(`select#addCarBrand`);
    }
// could be used for update car model
    static get addCarModel(){
        return cy.get(`select#addCarModel`);
    }
// could be used for update car mileage
    static get addCarMileage(){
        return cy.get(`input#addCarMileage`);
    }

    static get addCarModalButton(){
        return cy.get(`.modal-footer > .btn-primary`).contains('Add');
    }

    static get carLogo(){
        return cy.get(`div.car_logo`);
    }

    static get carName(){
        return cy.get(`p.car_name`);
    }

    static get editCarButton(){
        return cy.get(`button.car_edit.btn.btn-edit`);
    }

    static get addFuelExpenseButton(){
        return cy.get(`button`).contains('Add fuel expense');
    }

    static get carData(){
        return cy.get(`p.car_update-mileage`);
    }

    static get mileageIcon(){
        return cy.get(`span.update-mileage-form_icon`);
    }

    static getUpdateMileageInput(){
        return cy.get(`input.update-mileage-form_input`);
    }

    static get updateMileageButton(){
        return cy.get(`button.update-mileage-form_submit`);
    }

    static get editCarModalTitle(){
        return cy.get(`h4`).contains('Edit a car');
    }

    static get carCreatedDate(){
        return cy.get(`input#carCreationDate`);
    }

    static get editCarDatepicker(){
        return cy.get(`button.btn.date-picker-toggle`);
    }

    static get removeCarModalTitle(){
        return cy.get(`h4`).contains('Remove car');
    }

    static get removeCarModalText(){
        return cy.get(`div.modal-body[_ngcontent-whv-c68] > p:nth-of-type(1)`);
    }
    static get removeCarModalImportantText(){
        return cy.get(`div.modal-body[_ngcontent-whv-c68] > p:nth-of-type(2)`);
    }
    static get addExpenseModalTitle(){
        return cy.get(`h4`).contains('Add an expense');
    }

    static get addExpenseVehicle(){
        return cy.get(`select#addExpenseCar`);
    }

    static get addExpenseReportDate(){
        return cy.get(`input#addExpenseDate`);
    }

    static get addExpenseMileage(){
        return cy.get(`input#addExpenseMileage`);
    }

    //could be used for adding entity on the FuelExpenses page
    static get addExpenseLiters(){
        return cy.get(`input#addExpenseLiters`);
    }
    //could be used for adding entity on the FuelExpenses page
    static get addExpenseTotalCost(){
        return cy.get(`input#addExpenseTotalCost`);
    }

    static get datePickerButton(){
        return cy.get(`button.btn.date-picker-toggle`);
    }

    static get addExpenseModalButton(){
        return cy.get(`.modal-footer > .btn-primary`).contains('Add');
    }







}