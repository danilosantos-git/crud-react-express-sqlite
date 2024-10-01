Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) desenvolvida com React no frontend e Express com SQLite no backend. O objetivo é gerenciar uma lista de usuários, permitindo a criação, leitura, atualização e exclusão de registros.

## Tecnologias Utilizadas

- **Frontend**:

  - React
  - Styled-components
  - Axios
  - React Toastify

- **Backend**:
  - Express
  - SQLite
  - CORS

## Estrutura do Projeto

crud-react-express-sqlite/
├── frontend/ # Código do frontend
│ ├── public/ # Arquivos públicos
│ ├── src/ # Código-fonte da aplicação React
│ ├── .gitignore # Arquivo para ignorar arquivos no Git
│ └── package.json # Dependências do frontend
└── api/ # Código do backend
├── controllers/ # Controladores para gerenciar a lógica de negócios
├── routes/ # Rotas da API
├── db.js # Configuração do banco de dados SQLite
├── .gitignore # Arquivo para ignorar arquivos no Git
└── package.json # Dependências do backend

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- npm ou yarn para gerenciar pacotes

### Passos para o Frontend

1. Navegue até o diretório `frontend`:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

4. Acesse a aplicação no navegador em [http://localhost:3000](http://localhost:3000).

### Passos para o Backend

1. Navegue até o diretório `api`:

   ```bash
   cd api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   npm start
   ```

4. O servidor estará rodando na porta 8800.

## Funcionalidades

- **Adicionar Usuário**: Preencha o formulário e clique em "SALVAR" para adicionar um novo usuário.
- **Listar Usuários**: A lista de usuários é exibida na tabela.
- **Editar Usuário**: Clique no ícone de edição para modificar os dados de um usuário.
- **Excluir Usuário**: Clique no ícone de exclusão para remover um usuário da lista.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork deste repositório, faça suas alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License.
