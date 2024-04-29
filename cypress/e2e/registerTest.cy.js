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

  it('Check the sign in Garage service', () => {
    //cy.url().should('include', 'panel/garage');
    cy.log(password);
  });

});


 /* beforeEach(()=>{
    cy.visit(`/`);
    generalStep.login()
  });
/*
  afterEach(()=>{
    cy.log(email);
  });

  after(()=>{

  })


  it('Check the sign in Garage service', () => {
    cy.url().should('include', 'panel/garage');
  })

})*/