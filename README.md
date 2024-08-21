# auto-services

# É necessário ter o docker instalado e rodando para conseguir usar esse projeto

## Clone o arquivo `.env.example`, mas com o nome de `.env`, o `.env.example` tem todas as variáveis de ambiente necessárias, mas o app roda com o `.env`, caso contrário, a aplicação não inciará.

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

#### POST `/v1/services`

Endpoint para fazer o registro de um serviço no sistema, é necessário passar um token válido retornado pelo `/v1/users/auth` no Bearer Token.

O corpo da requisição deve ser um JSON com os seguintes campos:

- `description` (string, obrigatório): Descrição do serviço.
- `date` (Date, obrigatório): Data do serviço.
- `vehicleId` (string, obrigatório): Id do veículo.
- `status` (string, obrigatório): Status do serviço.
- `value` (number, obrigatório): Preço do serviço.

##### Exemplo de Request

```json
{
  "description": "Serviço completo",
  "date": "08-16-2024",
  "vehicleId": "66c53cc9db1f8784b346fe69",
  "status": "todo",
  "value": 1000
}
```

##### Resposta

```json
{
  "id": "66c53cd0db1f8784b346fe6c",
  "description": "Serviço completo",
  "date": "2024-08-16T00:00:00.000Z",
  "vehicleId": "66c53cc9db1f8784b346fe69",
  "userId": "66c5399cdb1f8784b346fe65",
  "status": "todo",
  "value": 1000,
  "vehicle": {
    "id": "66c53cc9db1f8784b346fe69",
    "name": "Nissan Skyline R34",
    "userId": "66c5399cdb1f8784b346fe65"
  }
}
```

#### POST `/v1/vehicles`

Endpoint para fazer o registro de um veículo para o usuário, é necessário passar um token válido retornado pelo `/v1/users/auth` no Bearer Token.

O corpo da requisição deve ser um JSON com os seguintes campos:

- `name` (string, obrigatório): Nome do veículo.

##### Exemplo de Request

```json
{
  "name": "Nissan Skyline R34"
}
```

##### Resposta

```json
{
  "id": "66c53cc9db1f8784b346fe69",
  "name": "Nissan Skyline R34",
  "userId": "66c5399cdb1f8784b346fe65"
}
```
