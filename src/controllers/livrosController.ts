import { Response, Request } from "express";
import livro from "../models/Livro"
import { autor } from "../models/Autor";

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

export default class LivroController {

    static async listarLivros (req: Request, res: Response){
        try {
            const listaLivros = await livro.find({});
             res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({message: `${getErrorMessage(error)} - falha ao buscar os livros`});
        }
    }

    static async buscarLivroPorId (req: Request, res: Response){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            if (livroEncontrado){
                res.status(200).json(livroEncontrado);
            }else{
                res.status(200 ).json({message: "Livro não encontrado na base de dados"});
            }
            
        } catch (error) {
            res.status(500).json({message: `${getErrorMessage(error)} - falha ao buscar o livro`});
        }
    }

    static async editarLivroPorId (req: Request, res: Response){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findByIdAndUpdate(id, req.body);
            if (livroEncontrado){
                res.status(200).json({message: `Livro atualizado!`});
            }else{
                res.status(200).json({message: "Livro não encontrado na base de dados"});
            }
        } catch (error) {
            res.status(500).json({message: `${getErrorMessage(error)} - falha ao buscar o livro`});
        }
    }

    static async adicionaLivros (req: Request, res: Response){
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "livro cadastrado com sucesso", livro: livroCriado});
        } catch (error) {
            res.status(500).json({message: `${getErrorMessage(error)} - falha ao cadastrar livro`})
        }
    }

    static async deletarLivroPorId (req: Request, res: Response){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findByIdAndDelete(id);
            if(livroEncontrado){
                res.status(200).json({message: `Livro Deletado!`});
            }else{
                res.status(200).json({message: "Livro não encontrado na base de dados"});
            }
        } catch (error) {
            res.status(500).json({message: `${getErrorMessage(error)} - falha ao buscar o livro`});
        }
    }

    static async buscarLivrosPorEditora (req: Request, res: Response){
        try {
            const editora = req.query.editora;
            const listaLivros = await livro.find({editora: editora});
             res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({message: `${getErrorMessage(error)} - falha ao buscar os livros`});
        }
    }
}