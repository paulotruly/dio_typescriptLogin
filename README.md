# Página de login e registro
Este projeto é uma aplicação de login e registro desenvolvida com **React**, **TypeScript** e **Tailwind CSS**, como parte do curso da [DIO](https://www.dio.me/). O objetivo principal foi praticar a integração dessas tecnologias na construção de uma interface moderna e responsiva, reforçando conceitos de autenticação e gerenciamento de estado no front-end.

## Tecnologias utilizadas

* **React**: Biblioteca JavaScript para criação de interfaces de usuário baseadas em componentes reutilizáveis.  
* **Tailwind CSS**: Framework CSS "utility-first" que permite criar layouts modernos e responsivos diretamente no JSX, de forma rápida e consistente.  

## Lógica do projeto

A lógica do projeto é simples: os usuários são registrados e armazenados diretamente no **localStorage** do navegador. No login, a aplicação recupera esses dados e verifica se as credenciais digitadas correspondem a algum usuário salvo. Não há backend envolvido, essa abordagem foi escolhida para fins de estudo.

## Próximos passos

* **Página de usuário logado**: Criar uma nova página acessível somente após o login, onde o usuário possa visualizar suas informações e também ter a opção de sair da conta (logout).
* **Estilização**: Refinar o design atual, já que algumas partes ainda estão incompletas ou simples demais, garantindo uma experiência mais consistente e agradável.

## Como executar o projeto  

1. Clone o repositório:  
```bash
git clone https://github.com/paulotruly/dio_typescriptLogin/
```
2. Certifique-se de ter o Node.js instalado e baixe as dependências:  
```bash
npm install
```
3. Execute o projeto:  
```bash
npm run dev
```
