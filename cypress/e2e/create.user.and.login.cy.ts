describe('User Registration and Login', () => {
    it('should register a user and then log in', () => {
      cy.visit('/register');

      cy.get('[formControlName="username"]').type('userTest');
      cy.get('[formControlName="password"]').type('userTest');
      cy.get('[formControlName="email"]').type('userTest@mail.fr');
  
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/login');
  
      cy.get('[formControlName="username"]').type('userTest');
      cy.get('[formControlName="password"]').type('userTest');
  
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/listcourse');
  
      cy.contains('Créer une nouvelle course');
    });
  });
  