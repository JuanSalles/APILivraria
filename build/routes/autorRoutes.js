"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autorController_1 = __importDefault(require("../controllers/autorController"));
const routes = express_1.default.Router();
routes.get("/autores", autorController_1.default.listarAutores);
routes.post("/autores", autorController_1.default.adicionaAutores);
routes.get("/autores/:id", autorController_1.default.buscarAutorPorId);
routes.put("/autores/:id", autorController_1.default.editarAutorPorId);
routes.delete("/autores/:id", autorController_1.default.deletarAutorPorId);
exports.default = routes;
