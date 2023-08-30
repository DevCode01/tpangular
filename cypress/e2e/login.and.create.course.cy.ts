describe('Login, Create Course, and Delete Course', () => {
  it('should log in, create a course, and then delete it', () => {
    cy.visit('/');
    cy.get('[formControlName="username"]').type('aa');
    cy.get('[formControlName="password"]').type('aa');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/listcourse');

    cy.contains('Créer une nouvelle course').click();
    cy.get('[formControlName="courseName"]').type('toto');
    cy.get('[formControlName="location"]').type('tutu');
    cy.contains('Ajouter une course').click();
    cy.contains('toto');

    cy.contains('toto')
      .parent() 
      .find('.btn-danger')
      .click();

    cy.contains('toto').should('not.exist');
  });
});
