import {GeneralStep} from "./general-step";
import GaragePage from "../pages/GaragePage";
import {baseButtons} from "../pages/BaseButtons";

export class GarageStep extends GeneralStep{

    addNewCar(car){
        baseButtons.baseButton('Add car').click();
        GaragePage.addCarBrand.select(car.brand);
        GaragePage.addCarModel.select(car.model);
        GaragePage.addCarMileage.type(car.mileage);
        //baseButtons.baseButton('Add').click(); тут не вдалось отримати кнопку, поверталось дві Add та Add car
        GaragePage.addCarModalButton.click();

    }

    removeCar(){
        GaragePage.editCarButton.eq(0).click();
        GaragePage.editCarModalTitle.should(`be.visible`);
        baseButtons.baseButton('Remove car').click();
        GaragePage.removeCarModalTitle.should(`be.visible`);
        baseButtons.baseButton('Remove').click();
    }

    checkCarIsAdded(){
        baseButtons.successMessage().should(`be.visible`);
    }

    checkCarIsDeleted(){
        baseButtons.successMessage().should(`be.visible`)
    }
    addAnExpense(fuelExpense){
        GaragePage.addFuelExpenseButton.eq(0).click();
        GaragePage.addExpenseVehicle.select(0);
        GaragePage.addExpenseReportDate.clear().type(fuelExpense.date);
        GaragePage.addExpenseMileage.clear().type(fuelExpense.mileage+0.5);
        GaragePage.addExpenseLiters.type(fuelExpense.liters);
        GaragePage.addExpenseTotalCost.type(fuelExpense.cost);
        GaragePage.addExpenseModalButton.click();
    }
    checkFuelExpenseIsAdded(){
        baseButtons.successMessage().should(`be.visible`);
    }

    selectDateFromDataPicker(){
        GaragePage.addFuelExpenseButton.eq(0).click();
        GaragePage.datePickerButton.click();
    }

    checkNewCarAddedViaAPI(carData){
        cy.request({
            method: 'GET',
            url: '/api/cars'
        }).then((res)=> {
            expect(res.status).to.eq(200);
            const allCars = res.body;
            cy.wrap(res.body.data.id).as('carId');
            let isCarCreated = false;
            cy.get('@carId').then((carId)=>{
                allCars.data.forEach(car => {
                if (carData.id === carId) {
                    expect(car.brand).to.eq(carData.brand);
                    expect(car.model).to.eq(carData.model);
                    expect(car.mileage).to.eq(carData.mileage);
                    isCarCreated = true;
                }
            });
                expect(isCarCreated).to.be.true;
            });

            });

    }

}
export const garageStep = new GarageStep();