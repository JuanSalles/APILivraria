"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const livrosController_1 = __importDefault(require("../controllers/livrosController"));
const routes = express_1.default.Router();
routes.get("livros", livrosController_1.default.listarLivros);
exports.default = routes;
