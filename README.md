# Sobre o projeto (front-end)
Projeto de um App de Músicas com frontend e backend. O projeto usa [API do Spotify](https://developer.spotify.com/) para pegar as músicas, álbums, playlists e artistas.
O usuário pode criar sua conta para armazenar nas suas playlists suas músicas favoritas.

Acesse o projeto aqui: https://music-app-i19b.onrender.com/

![home page](https://github.com/gabriel-tomas/music-app/blob/master/src/static/music-app.png?raw=true)

## Principal objetivo do projeto
O principal objetivo do projeto foi ver na práticar a integração de um frontend com backend separados.

## Frontend e Backend
O projeto possui o frontend feito com **React**, **Redux**, **Redux Sagas**, **styled-components** para o estilo e **react router dom V6** no roteamento.

O backend foi feito com **Express**, **JWTs** para autenticação do usuário e **MongoDB** no banco de dados para o armazenamento dos usuários e playlists dos usuários. [Aqui](https://github.com/gabriel-tomas/music-app_api) você consegue ver como o backend é de forma mais especifica.

## Tecnologias usadas
- JavaScript
- React
- Redux
- Redux Sagas
- styled-components
- NodeJs
- Express
- JWTs
- MongoDB

## Como rodar o projeto localmente
- Clone o repositório:
```shell
git clone https://github.com/gabriel-tomas/music-app.git
```
Vá para a pasta onde o projeto foi clonado

- Crie um .env na pasta raiz do projeto com as seguintes variáveis:
```shell
VITE_BACKEND_URL="url_do_backend" # < não é obrigatório
VITE_CLIENT_ID="spotify_client_id"
VITE_CLIENT_SECRET="spotify_client_secret"
```
Você pode seguir o "Para rodar o projeto localmente" do backend para ter um VITE_BACKEND_URL: https://github.com/gabriel-tomas/music-app_api?tab=readme-ov-file#para-rodar-o-projeto-localmente

O VITE_BACKEND_URL não é necessário para o projeto funcionar, mas coisas como: criação de contas, logar-se em contas, acessar biblioteca do usuário não estarão disponíveis.

Para conseguir seu client_id e client_secret do spotify: https://developer.spotify.com/documentation/web-api/tutorials/getting-started#request-an-access-token

- Instale os pacotes:
```shell
npm i
```
- Execute o server:
```shell
npm run dev
```
