import {garageStep} from "../../steps/garage-step";
import {baseButtons} from "../../pages/BaseButtons";
import {generalStep} from "../../steps/general-step";

const today = new Date();
const tomorrow = new Date(today);
const email='mariana@mariana.com';
const password='QTdvXj4!FSsuH2';


describe('Test Suite', () => {

    before(() => {
        cy.visit(`/`);
        generalStep.login(email, password);
        generalStep.verifyLoginButtonIsVisible();
    });

    it.skip(`Check the date is selected from dataPicker`, () => {
        tomorrow.setDate(tomorrow.getDate() + 1);
        garageStep.selectDateFromDataPicker();
        cy.parseDateFromDataPicker(tomorrow);
        baseButtons.baseModalCloseButton().click();
    });
});