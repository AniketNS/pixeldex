Cypress.Commands.add('visitHome', () => {
  cy.intercept('https://pokeapi.co/api/v2/pokemon/?limit=1008', {
    fixture: 'all_pokemon_sample',
  })
  .visit('http://localhost:3000/')
});

Cypress.Commands.add('visitSadHome', () => {
  cy.intercept('https://pokeapi.co/api/v2/pokemon/?limit=1008', {
    status: 404,
  })
  .visit('http://localhost:3000/')
});

Cypress.Commands.add('visitBulbasaur', () => {
  cy.get('.pokemon-container > div > :nth-child(1)').click();
});

Cypress.Commands.add('visitCharmander', () => {
  cy.get('.pokemon-container > div > :nth-child(4)').click();
});