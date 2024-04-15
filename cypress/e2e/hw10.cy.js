/// <reference types="cypress" />
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

const baseUrl='qauto2.forstudy.space/';
const testName='TestName';
const lastName='LastName';
const email=generateRandomEmail();
const password='123a@45678DDD';
const repeatPassword=password;

describe('Test the user Sign Up', () => {

  it('Check the registration', () => {
    cy.visit(`https://guest:welcome2qauto@${baseUrl}`);
    cy.get('button.hero-descriptor_btn.btn.btn-primary').click();
    cy.get('input#signupName').type(testName).should('have.value',testName);
    cy.get('input#signupLastName').type(lastName).should('have.value', lastName);
    cy.get('input#signupEmail').type(email).should('have.value',email);
    cy.get('input#signupPassword').type(password).should('have.value',password);
    cy.get('input#signupRepeatPassword').type(repeatPassword).should('have.value',repeatPassword);
    cy.get('button').contains('Register').click();
    cy.get('a.btn-sidebar.-profile').contains('Profile').click();
    cy.get('p.profile_name.display-4').should('have.text', testName +' undefined');
  })
})