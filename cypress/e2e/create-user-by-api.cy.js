import {generalStep} from "../../steps/general-step";
import {garageStep} from "../../steps/garage-step";

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

const car={
    brand: 'Fiat',
    model: 'Panda',
    mileage: '10'
}

describe(`Testing user registration by api`, ()=>{

    before(()=>{
        cy.clearAllLocalStorage();
    })

    it(`Check the user is registered`, ()=>{
        cy.request({
            url:'/api/auth/signup',
            method: 'POST',
            body: {
                "name": name,
                "lastName": lastName,
                "email": email,
                "password": password,
                "repeatPassword": password
            }

        }).then((res)=>{
        expect(res.status).to.eq(201)
        });
    });

    it('Login registered user via UI', () => {
        cy.visit(`/`);
        generalStep.login(email,password);
        generalStep.verifyLoginButtonIsVisible();
        garageStep.addNewCar(car);
        cy.request({
            url: '/api/cars',
            method: 'GET'
        }).then((res)=>{
            expect(res.status).to.eq(200);
            const allCars=res.body;
            let isCarCreated = false;
            allCars.data.forEach(car => {
                if (car.brand === 'Fiat' && car.model === 'Panda' && car.mileage === 10) {
                    isCarCreated = true;
                }
            });
            expect(isCarCreated).to.be.true;
        });
    });
});