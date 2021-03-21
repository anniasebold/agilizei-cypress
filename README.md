## 📋 Sobre
  Esse projeto foi desenvolvido na Semana Agilizei de Cypress.

  Nele foi realizada a automação end to end do site: [Dev Finance](https://devfinance-agilizei.netlify.app/#).

## 📚 Assuntos aplicados

Nessa semana através desse projeto foi possível entender sobre:

- A estrutura padrão de um projeto Cypress
- Mapear elementos no Cypress
- Adicionar validações / asserções nos códigos
- Interagir com elementos através do pai desse elemento
- Interagir com elementos através dos irmãos desse elemento
- Hooks do Cypress
- Formas de rodar o Cypress adicionando configurações na hora de rodar
- Adicionar scripts com atalhos para execuções rápidas já configuradas
- Interagir com LocalStorage para diminuir o tempo de execução da suite de testes
- Cypress Dashboard
- Github Actions para CI da suite de testes com o Github


## 💾 Como utilizar 

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

    npm run cypress:run:dash
