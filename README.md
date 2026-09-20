# CRUD de Filmes com Node.js

Projeto simples usando Node.js, Express e Mongoose para gerenciamento de filmes.

## Estrutura

```text
src/
├── controllers/
│   ├── filmeController.js
│   └── userController.js
├── models/
│   ├── Filme.js
│   └── User.js
├── routes/
│   ├── filmeRoutes.js
│   └── userRoutes.js
└── server.js
```

O projeto mantém os arquivos relacionados à entidade `User` do projeto-base e possui uma implementação de CRUD para a entidade `Filme`.

## Executar

Instale as dependências:

```bash
npm install
```

Configure a variável `MONGODB_URI` no arquivo `.env` com a string de conexão do MongoDB Atlas.

Exemplo:

```env
PORT=3000
MONGODB_URI=sua_string_de_conexao_do_mongodb_atlas
```

Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O backend será executado, por padrão, em:

```text
http://localhost:3000
```

## Rotas de Filmes

| Método | Rota          | Ação              |
| ------ | ------------- | ----------------- |
| GET    | `/filmes`     | Lista filmes      |
| GET    | `/filmes/:id` | Busca um filme    |
| POST   | `/filmes`     | Cria um filme     |
| PUT    | `/filmes/:id` | Atualiza um filme |
| DELETE | `/filmes/:id` | Exclui um filme   |

## Exemplo de JSON

```json
{
  "titulo": "O Poderoso Chefão",
  "diretor": "Francis Ford Coppola",
  "genero": "Drama",
  "ano": 1972,
  "nota": 9.2
}
```

## Validações

O cadastro de filmes possui as seguintes regras:

* `titulo` é obrigatório;
* `diretor` é obrigatório;
* `genero` é obrigatório;
* `ano` é obrigatório;
* `ano` deve ser igual ou superior a 1888;
* `ano` não pode ser maior que o ano atual;
* `nota`, quando informada, deve estar entre 0 e 10.

## Links do projeto

* [Repositório do Frontend](https://github.com/juanvalongo/aula-pratica-pwa-fullstack-frontend)
* [API publicada no Render](https://aula-pratica-pwa-fullstack-backend.onrender.com)
