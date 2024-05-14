import {GeneralStep} from "./general-step";
import FuelExpensesPage from "../pages/FuelExpensesPage";
import {baseButtons} from "../pages/BaseButtons";

export class FuelExpensesStep extends GeneralStep{
    deleteExpense(){
        FuelExpensesPage.fuelExpensesTitle.should('be.visible');
        FuelExpensesPage.removeExpenseButton.click({force:true});
        FuelExpensesPage.removeExpenseModalTitle.should(`be.visible`);
        baseButtons.baseButton('Remove').click();
    }
    checkExpenseIsDeleted(){
        baseButtons.successMessage().should(`be.visible`);
    }
    findTheAddedCarFromAPI(carData,expenseData){
        FuelExpensesPage.carSelectDropdown.should(`be.visible`);
        const carName = `${carData.brand} ${carData.model}`;
        FuelExpensesPage.carSelectDropdown.should('contain', carName);
        FuelExpensesPage.expensesDate.should('contain', this.formatDate(expenseData.reportedAt));
        FuelExpensesPage.expensesMileage.should('contain', expenseData.mileage);
        FuelExpensesPage.expensesLitersUsed.should('contain', expenseData.liters);
        FuelExpensesPage.expensesTotalCost.should('contain', expenseData.totalCost);

    }
    formatDate(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${day}.${month}.${year}`;
    }
}
export const fuelExpensesStep=new FuelExpensesStep();