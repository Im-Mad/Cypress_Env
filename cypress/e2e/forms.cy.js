describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })

    it('Test subscribe form', ()=> {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('imad@mail.com')
        cy.contains(/successfully subbed/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/successfully subbed/i).should('exist')
        cy.wait(3000)
        cy.contains(/successfully subbed/i).should('not.exist')

        cy.get('@subscribe-input').type('imad@mail.io')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/successfully subbed/i).should('not.exist')
    })
}) 