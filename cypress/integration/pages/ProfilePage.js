export default class ProfilePage{

    static get profileButton(){
        return cy.xpath(`//a[@class='btn btn-white btn-sidebar sidebar_btn -profile']`);
    }

    static displayUserFullName(name,lastName){
        cy.url().should('include','panel/profile');
        cy.xpath(`//p[@class='profile_name display-4']`).should('contain.text', `${name} ${lastName}`);
    }
}