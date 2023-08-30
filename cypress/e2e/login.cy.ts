describe('Login', () => {
    it('should log in successfully', () => {
      cy.visit('/'); 
  
      cy.get('[formControlName="username"]').type('aa');
      cy.get('[formControlName="password"]').type('aa');
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/listcourse');
  
      cy.get('td').should('have.length.gte', 12);
    });
    });
  