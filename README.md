## Sobre
  Esse projeto foi desenvolvido na Semana Agilizei de Cypress.

  Nele foi realizada a automação end to end do site: [Dev Finance](https://devfinance-agilizei.netlify.app/#).

### Configurações iniciais

Primeiramente clone o projeto
      
    git clone git@github.com:anniasebold/agilizei-cypress.git

Depois instale o Cypress

    npm install -D cypress

Após isso inicialize o Cypress
    
    npx cypress open

Ou inicialize utilizando o atalaho

    npm run cypress:run

Para inicializar de forma responsiva passe como parâmetro o viewportWidth e o viewportHeight

    npx cypress open --config viewportWidth=376,viewportHeight=823

Ou inicialize utilizando o atalaho

    npm run cypress:run:mobile

Para executar os testes no modo headless

    npx cypress run

Para executar os testes com o Cypress Dashboard

    cypress:run:dash
