export default class BaseModalButtons{
    modal={
        closeButton:()=> cy.get(`button.close`),
        saveButton:()=>cy.get(`button`).contains('Save'),
        cancelButton:()=>cy.get(`button`).contains('Cancel'),
        addButton:()=>cy.get(`button`).contains('Add')
    }

}

