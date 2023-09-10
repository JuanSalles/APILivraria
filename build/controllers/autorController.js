"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Autor_1 = require("../models/Autor");
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.message;
    return String(error);
}
class AutorController {
    static listarAutores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listaAutor = yield Autor_1.autor.find({});
                res.status(200).json(listaAutor);
            }
            catch (error) {
                res.status(500).json({ message: `${getErrorMessage(error)} - falha ao buscar os autores` });
            }
        });
    }
    static buscarAutorPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const autorEncontrado = yield Autor_1.autor.findById(id);
                if (autorEncontrado) {
                    res.status(200).json(autorEncontrado);
                }
                else {
                    res.status(200).json({ message: "Autor não encontrado na base de dados" });
                }
            }
            catch (error) {
                res.status(500).json({ message: `${getErrorMessage(error)} - falha ao buscar o autor` });
            }
        });
    }
    static editarAutorPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const autorEncontrado = yield Autor_1.autor.findByIdAndUpdate(id, req.body);
                if (autorEncontrado) {
                    res.status(200).json({ message: `Autor atualizado!` });
                }
                else {
                    res.status(200).json({ message: "Autor não encontrado na base de dados" });
                }
            }
            catch (error) {
                res.status(500).json({ message: `${getErrorMessage(error)} - falha ao buscar o autor` });
            }
        });
    }
    static adicionaAutores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novoAutor = yield Autor_1.autor.create(req.body);
                res.status(201).json({ message: "autor cadastrado com sucesso", autor: novoAutor });
            }
            catch (error) {
                res.status(500).json({ message: `${getErrorMessage(error)} - falha ao cadastrar autor` });
            }
        });
    }
    static deletarAutorPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const autorEncontrado = yield Autor_1.autor.findByIdAndDelete(id);
                if (autorEncontrado) {
                    res.status(200).json({ message: `Autor Deletado!` });
                }
                else {
                    res.status(200).json({ message: "Autor não encontrado na base de dados" });
                }
            }
            catch (error) {
                res.status(500).json({ message: `${getErrorMessage(error)} - falha ao buscar o Autor` });
            }
        });
    }
}
exports.default = AutorController;
