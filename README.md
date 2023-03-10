# Monorepo para e-Commerce

Este repositório contempla a arquitetura de monorepos construído a partir do **_build system_** [Turborepo](https://turbo.build/repo).

## Porque um build system?

A utilização de um monorepo é uma estratégia para a escabilidade da arquitetura para outras aplicações que possam compartilhar do mesmo código, tais como configuração de TypeScript, Design System e regras de negócio de dominío por exemplo.

## Estrutura dos repositórios

- `apps/ecommerce-rn`: Uma aplicação de e-Commerce desenvolvida com React Native (com Expo Bare);
- `packages/ui-rn`: Design System para compartilhar UI's entre as aplicações;
- `packages/eslint-config-react-custom`: Biblioteca de configuração do ESlint para React e React Native;
- `packages/tsconfig`: Configuração do TypeScript.

## Inicialização com APK

- Vá em [releases](https://github.com/thdq/ecommerce-app/releases) do projeto e baixa o APK em assets da versão desejada

## Inicialização local

### Requisitos

- Node v16.x (`No terminal use o comando nvm install 16`)
- NPM 6.x ou superior (`No terminal use o comando npm install -g npm@latest para atualizar`)

Para rodar localmente todos as aplicações e bibliotecas siga o comando abaixo após o clone do repositório:

```bash
npm install
npm run dev
```

Ou para rodar apenas uma aplicação pode-se usar o comando abaixo:

```bash
npm run start:APP_NAME # npm run dev:ecommerce-rn por exemplo
```

## Integração e entrega contínua

- [CI/CD](./docs//ci-cd.md)

### Documentações das aplicações/biblioteca

- [apps/ecommerce-rn](./apps/ecommerce-rn/README.md)
