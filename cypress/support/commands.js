import HomePage from "../../pages/HomePage";
import {baseButtons} from "../../pages/BaseButtons";
Cypress.Commands.add('loginViaAPI',(email,password, remember=false)=>{
    cy.request({
        method: 'POST',
        url: '/api/auth/signin',
        body:
            {
                "email": email,
                "password": password,
                "remember": remember
            }
    }).then(response=>{
        expect(response.status).to.eq(200);
        cy.log(response.body);
        return cy.wrap(response.body.data.userId).as('userId');
    });
});
Cypress.Commands.add('loginViaUI',(email, password) => {
    HomePage.signInButton.click();
    HomePage.signInEmail.type(email);
    HomePage.signInPassword.type(password);
    baseButtons.baseButton('Login').click();
});
Cypress.Commands.add('saveLocalStorage', ()=>{
    cy.wrap(localStorage).as('localStorage');
    cy.log(localStorage);
})
Cypress.Commands.add('restoreLocalStorage', ()=>{
    cy.get('@localStorage').then(data => {
        localStorage.clear();
        for (let key in data){
            cy.log(data[key]);
            localStorage.setItem(key,data[key]);
        }
    })
})
Cypress.Commands.add('addAnExpense',(fuelExpense,carId)=> {
    cy.request({
        method: 'POST',
        url: '/api/expenses',
        body:
            {
                ...fuelExpense,
                carId: carId
            }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body.data;
        });

    });

Cypress.Commands.add('parseDateFromDataPicker',(targetDate)=>{
    const formattedDate=targetDate.toLocaleString(`en-US`,{
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});

    cy.get(`.modal-body`).within(()=>{
        cy.get('.ngb-dp-day[aria-label="' + formattedDate + '"]')
            .should(`be.visible`).click()
    });
});

Cypress.Commands.add('generateRandomEmail',()=>{
    const domain = 'mariana.com';
    const length = 10;
    let username = '';
    let intro = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * intro.length);
        username += intro.charAt(index);
    }

    return username + '@' + domain;
});



