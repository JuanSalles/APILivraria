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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = __importDefault(require("../models/Livro"));
const Autor_1 = require("../models/Autor");
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.message;
    return String(error);
}
class LivroController {
    static listarLivros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listaLivros = yield Livro_1.default.find({});
                res.status(200).json(listaLivros);
            }
            catch (error) {
                res.status(500).json({ message: `${getErrorMessage(error)} - falha ao buscar os livros` });
            }
        });
    }
    static buscarLivroPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const livroEncontrado = yield Livro_1.default.findById(id);
                if (livroEncontrado) {
                    res.status(200).json(livroEncontrado);
                }
                else {
                    res.status(200).json({ message: "Livro não encontrado na base de dados" });
                }
            }
            catch (error) {
                res.status(500).json({ message: `${getErrorMessage(error)} - falha ao buscar o livro` });
            }
        });
    }
    static editarLivroPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const livroEncontrado = yield Livro_1.default.findByIdAndUpdate(id, req.body);
                if (livroEncontrado) {
                    res.status(200).json({ message: `Livro atualizado!` });
                }
                else {
                    res.status(200).json({ message: "Livro não encontrado na base de dados" });
                }
            }
            catch (error) {
                res.status(500).json({ message: `${getErrorMessage(error)} - falha ao buscar o livro` });
            }
        });
    }
    static adicionaLivros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const novoLivro = req.body;
            try {
                const autorEncontrado = yield Autor_1.autor.findById(novoLivro.autor);
                const livroCompleto = Object.assign(Object.assign({}, novoLivro), { autor: Object.assign({}, autorEncontrado) });
                const livroCriado = yield Livro_1.default.create(livroCompleto);
                res.status(201).json({ message: "livro cadastrado com sucesso", livro: livroCriado });
            }
            catch (error) {
                res.status(500).json({ message: `${getErrorMessage(error)} - falha ao cadastrar livro` });
            }
        });
    }
    static deletarLivroPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const livroEncontrado = yield Livro_1.default.findByIdAndDelete(id);
                if (livroEncontrado) {
                    res.status(200).json({ message: `Livro Deletado!` });
                }
                else {
                    res.status(200).json({ message: "Livro não encontrado na base de dados" });
                }
            }
            catch (error) {
                res.status(500).json({ message: `${getErrorMessage(error)} - falha ao buscar o livro` });
            }
        });
    }
    static buscarLivrosPorEditora(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const editora = req.query.editora;
                const listaLivros = yield Livro_1.default.find({ editora: editora });
                res.status(200).json(listaLivros);
            }
            catch (error) {
                res.status(500).json({ message: `${getErrorMessage(error)} - falha ao buscar os livros` });
            }
        });
    }
}
exports.default = LivroController;
