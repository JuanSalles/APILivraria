import express from "express";
import AutorController from "../controllers/autorController";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores);

routes.post("/autores", AutorController.adicionaAutores);

routes.get("/autores/:id", AutorController.buscarAutorPorId);

routes.put("/autores/:id", AutorController.editarAutorPorId);

routes.delete("/autores/:id", AutorController.deletarAutorPorId);

export default routes