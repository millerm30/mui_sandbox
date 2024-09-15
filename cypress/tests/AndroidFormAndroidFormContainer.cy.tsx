import AndroidFormContainer from '../../src/components/AndroidForm';

describe('<AndroidFormContainer />', () => {
  it('renders and shows error message on empty form submission', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AndroidFormContainer isLoading={false} isSubmitting={false} />);

    // Check that the form is initially visible
    cy.get('form').should('be.visible');

    // Simulate form submission
    cy.get('button').click();

    // Check that the error message is visible
    cy.contains('Service Account JSON is required').should('be.visible');
  });
});
