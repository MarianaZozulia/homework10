/// <reference types="cypress" />
import HomePage from "../../pages/HomePage";
import ProfilePage from "../../pages/ProfilePage";
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

describe('Test the user Sign Up', () => {

  it('Check the registration', () => {
    cy.visit(`/`);
    HomePage.signUpButton.should('exist');
    HomePage.signUpButton.click();
    HomePage.createAccount(user);
    HomePage.registerButton.click();
    ProfilePage.profileButton.click();
    ProfilePage.displayUserFullName(name,lastName);
  })
})