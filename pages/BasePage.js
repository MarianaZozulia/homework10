export default class BasePage{

    static get headerLogo(){
        return cy.get(`a.header_logo`);
    }

    static get headerGarage(){
        return cy.get(`a.btn header-link`).contains('Garage');
    }

    static get headerFuelExpenses(){
        return cy.get(`a.btn header-link`).contains('Fuel expenses');
    }

    static get headerInstructions(){
        return cy.get(`a.btn header-link`).contains('Instructions');
    }

    static get headerMyProfileButton(){
        return cy.get(`button#userNavDropdown`);
    }

    static get dropdownGarage(){
        return cy.get(`a.dropdown-item[routerlink="/panel/garage"]`);
    }

    static get dropdownFuelExpenses(){
        return cy.get(`a.dropdown-item[routerlink="/panel/expenses"]`);
    }

    static get dropdownInstructions(){
        return cy.get(`a.dropdown-item[routerlink="/panel/instructions"]`);
    }

    static get dropdownProfile(){
        return cy.get(`a.dropdown-item[routerlink="/panel/profile"]`);
    }
    static get dropdownSettings(){
        return cy.get(`a.dropdown-item[routerlink="/panel/settings"]`);
    }

    static get dropdownLogout(){
        return cy.get(`button.dropdown-item`).contains('Logout');
    }

    static get sidebarGarageItem(){
        return cy.get(`a[_ngcontent-whv-c65][routerlink="garage"]`);
    }

    static get sidebarFuelExpensesItem(){
        return cy.get(`a[_ngcontent-whv-c65][routerlink="expenses"]`);
    }

    static get sidebarInstructionsItem(){
        return cy.get(`a[_ngcontent-whv-c65][routerlink="instructions"]`);
    }

    static get sidebarProfileItem(){
        return cy.get(`a[_ngcontent-whv-c65][routerlink="profile"]`);
    }

    static get sidebarSettingsItem(){
        return cy.get(`a[_ngcontent-whv-c65][routerlink="settings"]`);
    }

    static get sidebarLogOutItem(){
        return cy.get(`a[_ngcontent-whv-c65]`).contains(' Log out ');
    }

    static get footerData(){
        return cy.get(`.col-7 > :nth-child(1)`);
    }

    static get footerText(){
        return cy.get(`.col-7 > :nth-child(2)`);
    }

    static get footerLogo(){
        return cy.get(`a.footer_logo`);
    }

}