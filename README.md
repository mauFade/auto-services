# auto-services

# É necessário ter o docker instalado e rodando para conseguir usar esse projeto

## Para rodar o app, rode o comando ´docker compose up --build´

# API Documentation

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
