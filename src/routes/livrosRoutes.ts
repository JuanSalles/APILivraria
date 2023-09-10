import express from "express";
import LivroController from "../controllers/livrosController";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);

routes.get('/livros/search', LivroController.buscarLivrosPorEditora);

routes.get("/livros/:id", LivroController.buscarLivroPorId);

routes.post("/livros", LivroController.adicionaLivros);

routes.put("/livros/:id", LivroController.editarLivroPorId);

routes.delete("/livros/:id", LivroController.deletarLivroPorId);

export default routes