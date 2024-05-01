/// <reference types="cypress" />
import HomePage from "../../pages/HomePage";
import ProfilePage from "../../pages/ProfilePage";
import BasePage from "../../pages/BasePage";
import {generalStep} from "../../steps/general-step";

function generateRandomEmail() {
  const domain = 'mariana.com';
  const length = 10;
  let username = '';
  let intro = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * intro.length);
    username += intro.charAt(index);
  }

  return username + '@' + domain;
}

const name='TestName';
const lastName='LastName';
const email=generateRandomEmail();
const password='123a@45678DDD';


const user={
  name: name,
  lastName: lastName,
  email: email,
  password: password,
  repeatPassword: password,
}
const loginEmail='mariana@mariana.com';
const loginPassword='QTdvXj4!FSsuH2';

describe('Test Suite', () => {

  beforeEach(() => {
    cy.visit(`/`);
    generalStep.login(loginEmail, loginPassword);
    generalStep.verifyLoginButtonIsVisible();
  });

  it('Login via API`',()=>{
    cy.intercept('GET','/api/cars', (req)=>{
      req.reply(res => {
        res.statusCode=404;
        res.body='NOT FOUND';
      });
    }).as('allCar');
    cy.visit(`/`);
    //cy.wait('@allCars').its('response.statusCode').should('eq',200);
    /*cy.wait('@allCars').then((res)=>{
      cy.log(JSON.stringify(res));
      cy.log(res.response.body.data[0].carBrandId);
    })*/
  })

  it.skip(`Login via API`, ()=>{
    cy.request({
      method: 'POST',
      url: '/api/auth/signin',
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body:
      {
        "email": "mariana@mariana.com",
        "password": "QTdvXj4!FSsuH2",
        "remember": false
      }
    }).as('login');

    cy.wait('@login');


    /*cy.wait('@login').then(()=>{

    })*/
  });

  it.skip('GET /users/current', () => {
    //cy.request('/users/current').its('body').should('include','status');
    //cy.request('/users/current').then((res)=>{
    cy.request('GET','/cars/brands').as('getAllCars');
    //cy.get('@getAllCars');
    cy.wait('@getAllCars').then((xhr) => {
      const response=xhr.responseWaited;
      cy.log(JSON.stringify(response));
    });

      //expect(body).to.have.property('status');
      //expect(body).to.have.property('data');
     // cy.log(JSON.stringify(res));
      //cy.log(JSON.stringify(res.body));

  });

});

