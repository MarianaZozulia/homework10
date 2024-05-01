import {generalStep} from "../../steps/general-step";
import {garageStep} from "../../steps/garage-step";
import {fuelExpensesStep} from "../../steps/fuel-expenses-step";
import GaragePage from "../../pages/GaragePage";
import {baseButtons} from "../../pages/BaseButtons";

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
const email='mariana@mariana.com';
const password='QTdvXj4!FSsuH2';

function parseDate(){
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    return day + '.' + month + '.' + year;
}

function parseDateFromDataPicker(targetDate){
    const formattedDate=targetDate.toLocaleString(`en-US`,{
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});

    cy.get(`.modal-body`).within(()=>{
        cy.get('.ngb-dp-day[aria-label="' + formattedDate + '"]')
            .should(`be.visible`).click()
    });
}

describe('Test Suite', () => {

    before(() => {
        cy.visit(`/`);
        generalStep.login(email, password);
        generalStep.verifyLoginButtonIsVisible();
    });

    it('Check the adding new car',()=>{
        garageStep.addNewCar(car)
        garageStep.checkCarIsAdded();
    });

    it('Check the car removing',()=>{
        garageStep.removeCar();
        garageStep.checkCarIsDeleted();

    });

    it(`Check the date is selected from dataPicker`,()=>{
        const today=new Date();
        const tomorrow=new Date(today);
        tomorrow.setDate(tomorrow.getDate()+1);
        garageStep.selectDateFromDataPicker();
        parseDateFromDataPicker(tomorrow);
        baseButtons.baseModalCloseButton().click();
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