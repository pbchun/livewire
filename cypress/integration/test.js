describe('LiveWire App Testing', () => {
    it('Home page loads correctly and logo displays at the top', () => {
        cy.visit('http://localhost:8080/#');
        cy.get('img').should('have.attr', 'src', 'Logo-no-background.png');
    });
    it('Click on the venue login link to take user to venue login page', () => {
        cy.get('#app > div > footer > a').click()
          .url().should('be', '/ForVenues');
    });
    it('Venue clicks login button to take user to venue login form', () => {
        cy.get('button').should('have', 'form')
    });
    it('Footer should be visible on For Artists page', () => {
        cy.get('footer').should('be.visible')
    });
    it('User clicks About Us in footer to load About page', () => {
        cy.get('a').contains('Us').click()
          .url().should('be', '/About')
    });
});