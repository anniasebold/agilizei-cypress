/// <reference types="cypress" />

import { format, prepareLocalStorage } from '../support/utils'

context('Dev Finances Agilizei', () => {

  beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app', {
      onBeforeLoad: (win) => {
        prepareLocalStorage(win)
      }

    })
  });

  it('Cadastrar entradas', () => {

    cy.get('#transaction .button').click()
    cy.get('#description').type('Mesada')
    cy.get('[name=amount]').type(12)
    cy.get('[type=date]').type('2021-03-17')
    cy.get('button').contains('Salvar').click()

    cy.get('#data-table tbody tr').should('have.length', 3)
  });

  it('Cadastrar saídas', () => {

    cy.get('#transaction .button').click()
    cy.get('#description').type('Mesada')
    cy.get('[name=amount]').type(-12)
    cy.get('[type=date]').type('2021-03-17')
    cy.get('button').contains('Salvar').click()

    cy.get('#data-table tbody tr').should('have.length', 3)
  });

  it('Remover entradas e saídas', () => {

    // estratégia 1: voltar para o elemento pai, e avançar pra um td img attr
    cy.get('td.description')
      .contains('Mesada')
      .parent()
      .find('img[onClick*=remove]')
      .click()

    // estratégia 2: buscar todos os irmãos, e buscar o que tem img + attr
    cy.get('td.description')
      .contains('Suco Kapo')
      .siblings()
      .children('img[onClick*=remove]')
      .click()

    cy.get('#data-table tbody tr').should('have.length', 0)

  });

  it('Validar saldo com diversas transações', () => {
    let incomes = 0
    let expenses = 0

    cy.get('#data-table tbody tr')
      .each(($el, index, $list) => {

        cy.get($el).find('td.income, td.expense').invoke('text').then(text => {
          if (text.includes('-')) {
            expenses = expenses + format(text)
          } else {
            incomes = incomes + format(text)
          }
          cy.log(`entradas`, incomes)
          cy.log(`saídas`, expenses)
        })
      })

    cy.get('#totalDisplay').invoke('text').then(text => {

      let formattedTotalDisplay = format(text)
      let expectedTotal = incomes + expenses

      expect(formattedTotalDisplay).to.eq(expectedTotal)

    })

  });
});