# banco-web-tests

Projeto de testes automatizados com Cypress e JavaScript, desenvolvido para fins de estudo durante a Mentoria 2.0. 
O objetivo é demonstrar práticas de automação de testes, organização de código com Custom Commands e geração de relatórios utilizando o cypress-mochawesome-reporter.

## Objetivo

Automatizar cenários de testes para a aplicação bancária [banco-web](https://github.com/juliodelimas/banco-web), 
consumindo a API [banco-api](https://github.com/juliodelimas/banco-api), utilizando Cypress como ferramenta de automação.

## Componentes do Projeto

- **Cypress**: Framework de testes.
- **Custom Commands**: Comandos personalizados para reutilização e organização dos testes.
- **cypress-mochawesome-reporter**: Geração de relatórios em HTML dos testes executados.
- **Estrutura de pastas**:
  - `cypress/e2e/`: Especificações dos testes (login, transferência).
  - `cypress/support/commands/`: Implementação dos Custom Commands.
  - `cypress/fixtures/`: Dados de teste (credenciais).
  - `cypress/reports/`: Relatórios gerados após execução dos testes.

## Pré-requisitos

- Node.js instalado
- Clonar e executar:
  - [banco-api](https://github.com/juliodelimas/banco-api)
  - [banco-web](https://github.com/juliodelimas/banco-web)

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## Execução dos Testes

- Para rodar todos os testes em modo headless:
  ```sh
  npm test
  ```
- Para rodar com interface gráfica:
  ```sh
  npm run cy:open
  ```
- Para rodar em modo headed (com navegador visível):
  ```sh
  npm run cy:headed
  ```

> **Importante:** Certifique-se de que a API e a aplicação web estejam rodando antes de executar os testes.

## Relatórios

Após a execução, os relatórios em HTML são gerados em `cypress/reports/html/index.html`.

## Estrutura dos Testes

- **Login:** Testa autenticação com credenciais válidas e inválidas.
- **Transferência:** Testa transferências válidas e cenários de erro (ex: valor acima de R$5.000 sem autenticação extra).

## Custom Commands

Os comandos personalizados estão implementados em [`cypress/support/commands/`](cypress/support/commands/):

- [`cy.fazerLoginCredenciaisValidas`](cypress/support/commands/login.js): Realiza login com usuário e senha válidos do fixture.
- [`cy.fazerLoginCredenciaisInvalidas`](cypress/support/commands/login.js): Realiza login com credenciais inválidas.
- [`cy.verificarMensagemNoToast`](cypress/support/commands/common.js): Valida mensagens exibidas em toasts.
- [`cy.selecionarOpcaoNaCombobox`](cypress/support/commands/common.js): Seleciona uma opção em um combobox pelo label.
- [`cy.realizarTransferencia`](cypress/support/commands/transferencia.js): Executa o fluxo de transferência entre contas.


---

Projeto desenvolvido para fins educacionais durante a Mentoria 2.0.
