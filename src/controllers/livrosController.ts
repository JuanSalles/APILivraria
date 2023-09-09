import { Response, Request } from "express";
import livro from "../models/Livro"

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

export default class LivroController {

    static async listarLivros (req: Request, res: Response){

        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    }

    static async adicionaLivros (req: Request, res: Response){
        try{
            const novoLivro = livro.create(req.body)
            res.status(201).json({message: "livro cadastrado com sucesso", livro: novoLivro});
        } catch (error) {
            res.status(500).json({message: `${getErrorMessage(error)} - falha ao cadastrar livro`})
        }
    }
}