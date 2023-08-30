describe('Login and Create Course', () => {
  it('should log in, create a course, and then delete it', () => {
    cy.visit('/');
    cy.get('[formControlName="username"]').type('aa');
    cy.get('[formControlName="password"]').type('aa');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/listcourse');
    cy.contains('Create New Course').click();
    cy.get('[formControlName="courseName"]').type('toto');
    cy.get('[formControlName="location"]').type('tutu');
    cy.contains('Create Course').click();
    cy.contains('toto - tutu');
    cy.contains('toto - tutu').find('.btn-danger').click();
    cy.contains('toto - tutu').should('not.exist');
  });
});
