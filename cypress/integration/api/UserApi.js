export default class UserApi{
    getCurrentUser(code=200){
        return cy.api('api/users/current').then(response=>{
            expect(response.status).to.eq(code);
            return this;
        })
    }

    updateUser(user){
        return cy.api({
            method: 'PUT',
            url: 'api/users/profile/',
            body: {
                "photo": `${user.photo}`,
                "name": `${user.name}`,
                "lastName": `${user.lastName}`,
                "dateBirth": `${user.date}`,
                "country": `${user.country}`
            }
        }).then(response=>{
            return this;
        })
    }

    validateUserUpdate(response,user,code){
        expect(response.status).to.eq(code);
        expect(response.body).to.have.property('status','ok');
        expect(response.body.date).to.have.property('date',user.date);

    }
}

export const userApi=new UserApi();