import express from "express";
import multer from "multer";
import {listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

const upload = multer({ dest: "./uploads" });
// para Linux ou Mac

const routes = (app) => {
    // Permite que o servidor interprete requisições no formato json.
    app.use(express.json());
    app.use(cors(corsOptions));
    // Rota para bucar todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost);
    // Rota para uploda de imagens (assumindo uma úniva imagem chamada "imagem")
    app.post("/upload", upload.single("imagem"), uploadImagem);
    // função controladora para processamendo de imagem.
    app.put("/upload/:id", atualizarNovoPost);

};

export default routes;



