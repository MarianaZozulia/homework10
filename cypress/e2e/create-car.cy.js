import {generalStep} from "../../steps/general-step";
import {garageStep} from "../../steps/garage-step";
import {fuelExpensesStep} from "../../steps/fuel-expenses-step";

const car={
    brand: 'Ford',
    model: 'Fusion',
    mileage: '10'
}

const fuelExpense={
    vehicle: car.brand + " " + car.model,
    date: parseDate(),
    mileage: car.mileage,
    liters: '10',
    cost: '500'
}

function parseDate(){
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    return day + '.' + month + '.' + year;
}

describe('Test Suite', () => {

    before(() => {
        cy.visit(`/`);
        generalStep.login('mariana@mariana.com', 'QTdvXj4!FSsuH2')
        generalStep.verifyLoginButtonIsVisible();
    });

    it('Check the adding new car',()=>{
        garageStep.addNewCar(car)
        garageStep.checkCarIsAdded();
        //garageStep.addAnExpense('1', 'Apr', '2023');
    });

    it('Check the car removing',()=>{
        garageStep.removeCar();
        garageStep.checkCarIsDeleted();

    });

    it('Check the adding the fuel expense', () => {
        garageStep.addAnExpense(fuelExpense);
        garageStep.checkFuelExpenseIsAdded();
    });

    it('Check the expense removing',()=>{
        fuelExpensesStep.deleteExpense();
        fuelExpensesStep.checkExpenseIsDeleted();
    });


})