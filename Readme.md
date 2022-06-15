# Notas app

 Teste prático.
 
[![Linkedin Badge](https://img.shields.io/badge/-JonasMartins-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://www.linkedin.com/in/jonas-martins-950a30184/)](https://www.linkedin.com/in/jonas-martins-950a30184/)


 <p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Iniciar Projeto</a>
</p>

## 🚀 Questões Teóricas

- Quais as partes principais de uma requisição HTTP?
#### request line, headers e body

- Qual a diferença entre colocar um script dentro do "head" e no fim do "body"?
#### Quando colocamos o script dentro do head, ela será executada antes de qualquer elemento dentro do body, e quando colocamos ela no fim do body, damos uma garantia de que ela só será executada depois da página ser montada.

 - Qual a diferença entre display: block e display: inline-block ?
#### quando colocamos o display block, vai adicionar uma quebra de linha aós o elemento, não sendo possível ter dois elementos na mesma linha, já o display inline-block não adiciona uma quebra de linha, então ele pode ficar ao lado de outros elementos.

- É possível criar um site responsivo SEM media queries? Por que?
#### não, por que é através das media queries que vamos conseguir definir a largura ou o tamanho ideal, para que o nosso site fique adequado em telas de computador, smartphones, tablets... 

- No Javascript, é obrigatório usar VAR para criar uma variável?
#### é sempre importante criarmos variáveis, mas  não é uma boa pratica utilizar o VAR para criarmos uma variável, visto que ela é uma variável global(ela pode ser modificada em qualquer parte do nosso código) é mais recomendado utilizarmos o LET ou o CONST para criarmos as nossas variáveis.

- Criar funções com "function() {}" e com "() => {}" tem alguma diferença além da sintaxe?
#### as arrow function não tem o this, arguments, super, que uma função tradicional tem. 

Explique a lógica pra fazer uma paginação.
#### primeiro pegamos o tamanho da lista, dividimos pela quantidade de lista por pagina arredondando para cima, e assim geramos o total de pagina.

Qual a melhor forma de armazenar uma imagem no banco de dados?
#### Eu costumo armazenar um indicador no banco de dados, para a localização do arquivo no disco, fazendo com oque o meu banco de dados, não crela rapidamente.

- No React, quantos useEffect eu posso usar?
#### podemos utilizar quantos useEffect quisermos

- Quais métodos de requisição preciso para criar um CRUD via API?
#### GET POST PUT DELETE


## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- React
- Styled Components
- Express
- Sqlite
- Knex (Query Builder)



## Projeto

![image](.github/background.png)

## 🚀 Iniciar Projeto

#### BACKEND

Clonar Projeto e acessar pasta e iniciar o servidor é necessário ter nodeJs instalado.

Clone o projeto e acesso a pasta e execute

```bash
$ https://github.com/jonasmartinsdev/note_app.git
$ cd api
```
Com o nodejs instalado execute as migrations e defina as variável de ambiente e inicie o servidor

```bash 
 $ yarn
 $ yarn migrate
 $ yarn dev
 ```

 #### FRONTEND
```bash
$ cd fe
```
Defina a variável de ambiente da api em vite.config.js 

```bash
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin ({
      REACT_APP_API_URL: 'http://localhost:3002' 
    })
  ],
  
})

```

Inicie a aplicação


```bash
$ yarn
$ yarn dev
```



<p align="center">Criado com 💜 Jonas Martins👋</p>



