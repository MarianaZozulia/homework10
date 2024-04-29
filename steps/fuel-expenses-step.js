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
}
export const fuelExpensesStep=new FuelExpensesStep();