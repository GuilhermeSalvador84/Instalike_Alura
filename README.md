# Instabytes - Backend

## Descrição
Instabytes é uma API Node.js que permite criar, atualizar e gerenciar posts com imagens. O projeto utiliza o MongoDB Atlas como banco de dados e integra-se ao Google Gemini para gerar descrições automáticas para as imagens.

## Tecnologias Utilizadas
* **Node.js:** Ambiente de execução JavaScript.
* **JavaScript:** Linguagem de programação principal.
* **MongoDB Atlas:** Banco de dados NoSQL.
* **Gemini:** Modelo de linguagem para geração de descrições de imagens.
* **Multer:** Middleware para lidar com uploads de arquivos (imagens).
* **Thunder Client, Postman:** Ferramentas para testar a API.

## Pré-requisitos
* Node.js e npm (ou yarn) instalados.
* Uma conta no MongoDB Atlas e um cluster criado.
* Uma chave de API do Google Cloud para utilizar o Gemini.

## Instalação
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/GuilhermeSalvador84/Instalike_Alura.git

2. **Instale as dependências:**
   ```bash
   cd instabytes
   npm install

3. **Configure o arquivo .env:**
* Copie o arquivo .env.example para .env.
* Preencha as variáveis de ambiente com suas credenciais do MongoDB Atlas e a chave de API do Google Cloud.

  **Execução**
  ```
  npm run dev

Isso iniciará o servidor de desenvolvimento.

## Utilização

* Criar um novo post:
Envie uma requisição POST para a rota /posts com os dados do post no corpo da requisição.
Inclua um campo image para enviar a imagem.
* Atualizar um post:
Envie uma requisição PUT para a rota /posts/:id com os novos dados do post.
* Deletar um post:
Envie uma requisição DELETE para a rota /posts/:id.

**Estrutura do Projeto**

![Captura de Tela 2024-11-24 às 18 43 15](https://github.com/user-attachments/assets/b2a95130-f0a4-4c6d-b138-bdd7ff56458b)

## Contribuições

Contribuições são bem-vindas! Para contribuir, por favor, siga estas etapas:

Fork este repositório.

1. Crie um novo branch.
2. Faça suas alterações e commit.
3. Envie um pull request.

**Autor**
Guilherme Salvador
guilhermesalvador@hotmail.com
