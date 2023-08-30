describe('Login, Logout, and Access List Course', () => {
    it('should login, logout, and then access listcourse', () => {
      cy.visit('/'); 
      
      cy.get('[formControlName="username"]').type('aa');
      cy.get('[formControlName="password"]').type('aa');
  
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/listcourse');
  
      cy.get('.btn-logout').click();
  
      cy.url().should('include', '/login');
  
      cy.visit('/listcourse'); 
  
      cy.url().should('include', '/login');
    });
  });
  