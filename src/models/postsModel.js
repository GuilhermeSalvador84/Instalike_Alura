import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// Conecta ao banco de daoos utilizando a strig de conexáo fornecida como variavel.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
    // Seleciona o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    //Seleciona a coleção de "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    //retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
  };

export async function criarPost(novoPost) {
    // Seleciona o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    //Seleciona a coleção de "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    //retorna um array com o novo post.
    return colecao.insertOne(novoPost)
  };

export async function atualizarPost(id, novoPost) {
    // Seleciona o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    //Seleciona a coleção de "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // criado para guardar o Id do passo anterior e fazer o update.
    const objId = ObjectId.createFromHexString(id);
    //retorna um array com o novo post.
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set:novoPost})
  };