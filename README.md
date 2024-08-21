# auto-services

# É necessário ter o docker instalado e rodando para conseguir usar esse projeto

## Clone o arquivo .env.example e clone o mesmo, mas com o nome de .env, caso contrário a aplicação não inciará.

## Para rodar o app, rode o comando ´docker compose up --build´

Esse comando irá buildar um banco de dados MongoDB e de pois a aplicação NodeJs, os testes unitários são rodados automaticamente.

# API Documentation

## Insomnia

Dentro do projeto, há uma pasta chamada `collection`, nela há um arquivo json para importar a collection do Insomnia pronta para ser usada com os endpoints disponiveis na aplicação.

## Endpoints

### Create User

#### POST `/v1/users`

Este endpoint cria um novo usuário no sistema.

##### Request Body

O corpo da requisição deve ser um JSON com os seguintes campos:

- `name` (string, obrigatório): Nome do usuário.
- `email` (string, obrigatório): Email do usuário. O email deve ser válido e único.
- `password` (string, obrigatório): Senha do usuário. A senha será criptografada antes de ser armazenada.

##### Exemplo de Request

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "mysecurepassword"
}
```

### Possiveis erros

##### Formato de e-mail inválido

```json
{
  "error": "Invalid email."
}
```

##### E-mail ja existe no sistema

```json
{
  "error": "User already exists"
}
```

#### POST `/v1/users/auth`

Endpoint para gerar o token jwt que é requirido em TODOS os outros endpoints, pegue o item "token" do corpo da resposta e passe no Authorization Bearer Token. No Insomnia você pode setar o mesmo nas variaveis de ambiente. O token dura 24hrs.

O corpo da requisição deve ser um JSON com os seguintes campos:

- `email` (string, obrigatório): Email do usuário.
- `password` (string, obrigatório): Senha do usuário.

##### Exemplo de Request

```json
{
  "email": "johndoe@example.com",
  "password": "mysecurepassword"
}
```

##### Resposta

```json
{
  "id": "iddousuario",
  "name": "johndoe",
  "token": "tokenjwtgeradopeloservice"
}
```
