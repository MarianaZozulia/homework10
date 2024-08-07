import {generalStep} from "../../steps/general-step"
import {garageStep} from "../../steps/garage-step";
import {fuelExpensesStep} from "../../steps/fuel-expenses-step";
import {generateRandomCar, fakerCar} from "../../data/car-data";


const car=generateRandomCar();
const carFromFaker=fakerCar();


const expenseData = {
    "reportedAt": "2024-07-29",
    "mileage": Number(car.mileage)+5,
    "liters": 11,
    "totalCost": 11,
    "forceMileage": false
};
const email='mariana@mariana.com';
const password='QTdvXj4!FSsuH2';

function parseDate(){
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    return day + '.' + month + '.' + year;
}


let carId;

describe('Test Suite', () => {

    before(() => {
        generalStep.openMainPage();
        generalStep.login(email, password);
        generalStep.verifyLoginButtonIsVisible();
    });

    it('Check the adding new car', () => {
        cy.intercept('POST', 'api/cars').as('cars');
        garageStep.addNewCar(car);
        cy.wait('@cars').then((response) => {
            const res = response.response;
            cy.writeFile('cypress/integration/fixtures/carsResponseData.json', res);
            cy.wrap(res.body.data.id).then(id => {
                carId = id;
            });
        });
        garageStep.checkNewCarAddedViaAPI(car, carId);
    });

    it('Check the adding the fuel expense via API', () => {
        cy.loginViaAPI(email, password);
        cy.addAnExpense(expenseData,carId);
    });

    it.skip('Check the expense is added from API',()=>{
        generalStep.openMainPage();
        generalStep.login(email, password);
        generalStep.verifyLoginButtonIsVisible();
        generalStep.openExpensesPage();
        fuelExpensesStep.findTheAddedCarFromAPI(car,expenseData);

    })

        it.skip('Check the car removing', () => {
            garageStep.removeCar();
            garageStep.checkCarIsDeleted();

        });

        it.skip('Check the expense removing', () => {
            fuelExpensesStep.deleteExpense();
            fuelExpensesStep.checkExpenseIsDeleted();
        });
});


