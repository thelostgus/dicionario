# Dicionario

## O que รฉ?
ร uma interface de dicionario animado criado com ReactJS junto a um ambiente Docker. Todo seu conteudo exibido รฉ gerado por via de scraping ao website [dicio.com.br](dicio.com.br).

## O que ele faz?
- Faz scrap das palavras pesquisadas diretamente de [dicio.com.br](https://dicio.com.br/)
- Exibe as pesquisas em tela de forma animada

## O que compรตe o Projeto?
1. [TypeScript](https://www.typescriptlang.org/)
2. [ReactJS](https://pt-br.reactjs.org/)
3. [Ant Design](https://ant.design/)
4. [axios](https://axios-http.com/ptbr/docs/intro)
5. [React Router](https://reactrouter.com/)
6. [yarn](https://yarnpkg.com/)
7. [Framer](https://www.framer.com/)
8. [Docker](https://www.docker.com/)
9. [Docker Compose](https://docs.docker.com/compose/)

## Arvore de diretorios e arquivos do projeto
<details>
  <summary>๐(<strong>Clique aqui ๐ฅ</strong>)๐</summary>

  ```
  .
  โโโ README.md
  โโโ builds
  โย ย  โโโ nodejs.Dockerfile
  โโโ docker-compose.yml
  โโโ src
      โโโ README.md
      โโโ package.json
      โโโ public
      โย ย  โโโ favicon.ico
      โย ย  โโโ index.html
      โย ย  โโโ logo192.png
      โย ย  โโโ logo512.png
      โย ย  โโโ manifest.json
      โย ย  โโโ robots.txt
      โโโ src
      โย ย  โโโ components
      โย ย  โย ย  โโโ App.tsx
      โย ย  โย ย  โโโ BarraPesquisa.tsx
      โย ย  โย ย  โโโ Conteudo
      โย ย  โย ย  โย ย  โโโ Classe.tsx
      โย ย  โย ย  โย ย  โโโ Etimologia.tsx
      โย ย  โย ย  โย ย  โโโ Item.tsx
      โย ย  โย ย  โย ย  โโโ Palavra.tsx
      โย ย  โย ย  โย ย  โโโ Significados.tsx
      โย ย  โย ย  โย ย  โโโ Sinonimos.tsx
      โย ย  โย ย  โย ย  โโโ index.tsx
      โย ย  โย ย  โโโ Home.tsx
      โย ย  โย ย  โโโ home.css
      โย ย  โโโ index.css
      โย ย  โโโ index.tsx
      โย ย  โโโ reportWebVitals.ts
      โย ย  โโโ services
      โย ย  โย ย  โโโ requests.ts
      โย ย  โย ย  โโโ utils.ts
      โย ย  โโโ types
      โย ย      โโโ index.ts
      โโโ tsconfig.json
      โโโ yarn-error.log
      โโโ yarn.lock
  ```

</details>

## Como instalar?
- Com Docker e projeto buildado
1. ```git clone https://github.com/gusscamargo/dicionario```
2. ``` cd dicionario```
3. ```docker-compose build```
4. ```docker-compose up -d```
5. ```Espere carregar```
6. Acesse [127.0.0.1](http://127.0.0.1/)

- Sem Docker e projeto nรฃo buildado
1. ```git clone https://github.com/gusscamargo/dicionario```
2. ``` cd dicionario/src```
3. ```npm install``` ou ```yarn install```
4. ```npm start``` ou ```yarn start```
5. Espere carregar a compilaรงรฃo
6. Acesse [127.0.0.1:3000](http://127.0.0.1:3000/)

## Como usar:
1. Digite a palavra e aperte enter ou clique no botรฃo.
2. Espere.


![GIF](https://i.imgur.com/wTjBxkg.gif)
