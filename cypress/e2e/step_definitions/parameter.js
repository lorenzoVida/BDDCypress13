import { Given, When } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('Ingreso a la web de google', () => {
  cy.visit(url)
})

When('busco la palabra {string}', (product) => {
    cy.get("#APjFqb").type(product)
  })