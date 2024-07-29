import {userStep} from "../../steps/user-step";

const user={
    "photo": "user-1621352948859.jpg",
    "name": "John",
    "lastName": "Dou",
    "dateBirth": "2021-03-17T15:21:05.000Z",
    "country": "Ukraine"
}

const email='mariana@mariana.com';
const password='QTdvXj4!FSsuH2';

describe.skip('User',()=>{

    it('update user ', () => {
        cy.loginViaAPI(email,password);
        userStep.updateUserViaApi(user);
    });
})