# 🐉 Poke Store API
## 🚀 Descrição do Projeto
Quem não lembra dos bons e velhos tempos jogando ou assistindo Pokémon, não é mesmo? Então que tal matar essa saudade com a Poke Store?!?! Com ela você poderá comprar seus Pokémons prediletos para ter como companhia!!!

<br/>


## 🔍 Sobre
Na Poke Store API você será capaz de selecionar seus Pokémons prediletos para te fazer companhia. Desde visualizar seu amiguinho até finalizar sua compra! Fácil, não é mesmo? Nessa API voltada para um e-commerce, podemos encontrar as seguintes funcionalidades:

### Features
- [x] [`Verificar se o server está funcionando`](#get-health)
- [x] [`Realizar cadastro`](#post-authlogin)
- [x] [`Fazer login`](#post-authsign-up)
- [x] [`Listar todos os pokémons`](#get-products)
- [x] [`Buscar pokémon através de nome ou ID`](#get-productspokenameorid)
- [x] [`Adicionar um pokémon ao carrinho`](#put-productsproductid)
- [x] [`Receber informações de um carrinho`](#get-cart)
- [x] [`Finalizar compra de um carrinho`](#post-checkout)

<br/>


## ✔️ Tabela de conteúdo
<!--ts-->
- [🐉 Poke Store API](#-poke-store-api)
	- [🚀 Descrição do Projeto](#-descrição-do-projeto)
	- [🔍 Sobre](#-sobre)
		- [Features](#features)
	- [✔️ Tabela de conteúdo](#️-tabela-de-conteúdo)
	- [🖥 Tecnologias](#-tecnologias)
	- [⚙ Como usar](#-como-usar)
		- [Instalando o app](#instalando-o-app)
		- [Instalando a API](#instalando-a-api)
		- [Iniciando o servidor](#iniciando-o-servidor)
		- [Populando banco de dados](#populando-banco-de-dados)
		- [Preparando setup](#preparando-setup)
		- [Inicializando a API](#inicializando-a-api)
	- [📜 Documentação](#-documentação)
		- [`GET /health`](#get-health)
		- [`POST /auth/login`](#post-authlogin)
		- [`POST /auth/sign-up`](#post-authsign-up)
		- [`GET /products`](#get-products)
		- [`GET /products/:pokeNameOrId`](#get-productspokenameorid)
		- [`PUT /products/:productId`](#put-productsproductid)
		- [`GET /cart`](#get-cart)
		- [`POST /checkout`](#post-checkout)
	- [👨🏼‍💻 Autores](#-autores)
<!--te-->

<br/>


## 🖥 Tecnologias
<p align="center">
  <img alt="mongodb" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img alt="nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img alt="npm" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
  <img alt="expressjs" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img alt="eslinter" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>
</p>

<br/>


## ⚙ Como usar

Para utilizar essa API, será necessário ter na sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [MongoDB](https://www.mongodb.com/).
Além disso recomendo fortemente a utilização de um bom ter um editor de código, como o [VSCode](https://code.visualstudio.com/)!


### Instalando o app
Seguir os passos descritos na seção de [instalação do app](https://github.com/TiagoVota/poke-store/blob/main/README.md).

### Instalando a API
```bash

# Clone este repositório
git clone https://github.com/TiagoVota/poke-store-api

# Acesse a pasta do projeto no terminal/cmd
cd poke-store-api

# Instale as dependências
npm install

```

### Iniciando o servidor

```bash

# Enquanto estiver utilizando o MongoDB, seu servidor deve estar funcionando
mongod --dbpath ~/.mongo

# Esse comando deverá ser feito toda vez que quiser rodar o servidor do mongoDB

```

### Populando banco de dados

```bash

# Popular sua database através de um script
npm run seed

```
Caso queira ver, a população do database será feita através [desse banco de dados](https://github.com/TiagoVota/poke-store-api/blob/main/populateMongodb.js). Além disso, a estrutura do nosso banco de dados pode ser vista através [desse arquivo](https://github.com/TiagoVota/poke-store-api/blob/main/mongodbStructure.js)!


### Preparando setup
Na pasta principal da API, crie um arquivo `.env.dev` aos mesmos moldes do arquivo [`.env.example`](https://github.com/TiagoVota/poke-store-api/blob/main/.env.example).

### Inicializando a API
```bash

# Execute a aplicação em modo de desenvolvimento
npm run start:dev

# O servidor iniciará na porta:PORT (escolhida no arquivo .env) - acesse http://localhost:PORT 

```

<br/>


## 📜 Documentação
Agora veremos quais os principais endpoints dessa aplicação

### `GET /health`

### `POST /auth/login`

### `POST /auth/sign-up`

### `GET /products`

### `GET /products/:pokeNameOrId`

### `PUT /products/:productId`

### `GET /cart`

### `POST /checkout`

<br/>


## 👨🏼‍💻 Autores

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/56308226?v=4" width="100px;" alt="Foto de perfil Tiago Vota Cucco"/>
<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/78576546?v=4" width="100px;" alt="Foto de perfil Felipe Ventura"/>

Feito por Tiago Vota Cucco e Felipe Ventura. Entre em contato conosco!

[![Gmail Badge](https://img.shields.io/badge/-tiagovotacucco@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:tiagovotacucco@gmail.com)](mailto:tiagovotacucco@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-Tiago-Vota?style=flat&logo=Linkedin&logoColor=white&color=blue&link=https://www.linkedin.com/in/tiago-vota-cucco)](https://www.linkedin.com/in/tiago-vota-cucco) 

<br/><br/>
