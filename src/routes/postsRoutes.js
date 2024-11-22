import express from "express";
import { listaPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Permite que o servidor receba dados no formato JSON
    app.use(express.json());
    // Rota GET para buscar todos os posts
    app.get("/posts", listaPosts);
}

export default routes;

