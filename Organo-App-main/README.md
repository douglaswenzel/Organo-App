# Organo v2.0

Este é um projeto React feito com [Create React App](https://github.com/facebook/create-react-app) sobre organização de times e equipes desenvolvido no curso de formação React da [Alura](https://cursos.alura.com.br/formacao-react-javascript)

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Organo**
| :label: Tecnologias | react, tsx, typescript, css, html, npm
| :rocket: URL         | https://organo-app-blond.vercel.app/

![](/public/img/banner.png#vitrinedev)

## Detalhes do projeto

O Organo é um projeto de estudo de React, onde o usuário pode criar times e equipes, e adicionar membros a elas, com o objetivo de organizar melhor o trabalho em equipe.

### ⚙️ Configurando o projeto
Para que o projeto funcione corretamente, é necessário instalar as dependências do projeto. Para isso, basta executar o comando abaixo no terminal:

```bash
npm install
```

### ▶️ Executando o projeto
No diretório do projeto, você pode executar:
```bash
npm start
```
Com o comando acima, você irá rodar o projeto em modo de desenvolvimento que pode ser acessado em [http://localhost:3000](http://localhost:3000) no seu navegador.

### 📚 Bibliotecas
Para o desenvolvimento foi utilizado algumas bibliotecas do npm sendo elas:
  * [hex-to-rba](https://www.npmjs.com/package/hex-to-rgba)
  * [uuid](https://www.npmjs.com/package/uuid)
  * [sweetalert2](https://sweetalert2.github.io/)

### 💡 Funcionalidades

#### Adicionando membros a times - Organo v1.0
O usuário pode adicionar os membros de sua equipe através do formulário abaixo, vinculando-os a um time, com seu nome, cargo e foto.

![image](https://user-images.githubusercontent.com/101435037/209827854-9fbcf40e-6f17-4b38-a029-767950098494.png)

É importante ressaltar que a imagem deve ser informada através de url para que o programa possa navegar até ela e exibi-la na página:

![image](https://user-images.githubusercontent.com/101435037/209828098-a9e14d03-5c86-46ec-92a8-25abd18f4f3a.png)

Após adicionar seus membros, cada um é dispostos em sessões selecionadas pelo formulário

![ezgif com-gif-maker](https://user-images.githubusercontent.com/101435037/209831596-035d911c-0e15-40c2-bf04-674a726c42ec.gif)

#### Esconder formulário - Organo v1.0
Após ter pelo menos um registro de time, a sessão de grupos é exibida junto ao botão de esconder formulário para melhor visualização:

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/101435037/209832752-db6f7bf9-708d-45ca-bacf-bcfcedc23a13.gif)

#### Criando novos times  - Organo v2.0
O usuário, através do formulário de times, pode criar uma nova section para vincular os cards de membros no primeiro formulário, podendo escolher seu nome e cor:

![ezgif com-gif-maker](https://user-images.githubusercontent.com/101435037/211048759-49f5d4e7-9b41-4af6-97b5-b9ef1acaf241.gif)

#### Mudar cores das sections  - Organo v2.0
Em cada section da organização, ao canto existe um input de tipo cor que é possível alterar, mudando a cor dos cards e do background da section:

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/101435037/211050003-aa0bc832-4da3-47f4-8292-637aebb9e0dd.gif)

#### Deleção de cards  - Organo v2.0
Em cada card criado é possível visualizar um icone de exclusão que ao pressionado exclui o card em questão, desde que o mesmo não seja um card favoritado:

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/101435037/211051233-cad59f85-7d92-46f7-89ad-273bba2b2058.gif)

#### Persistência de dados no Local Storage  - Organo v2.0
Em cada submit de formulário, adicionando membros e times, mudando suas cores e os removendo, o Local Storage guarda todas as informações para que o organograma não seja perdido quando é atualizada ou fechada a página.

| Cards 🃏 | Times 👨‍👩‍👦‍👦 |
| :---------: | :---------: |
| ![Anotação 2023-01-06 131221](https://user-images.githubusercontent.com/101435037/211052832-7c579a23-8cb5-446c-977e-583ae65c6609.png) | ![Anotação 2023-01-06 1312213](https://user-images.githubusercontent.com/101435037/211052859-e34847ec-fc5e-4b89-8901-65a750c3fcd0.png) |
