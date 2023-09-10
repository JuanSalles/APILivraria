import { Response, Request } from "express";
import { autor } from "../models/Autor"

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

export default class AutorController {

    static async listarAutores (req: Request, res: Response){
        try {
            const listaAutor = await autor.find({});
            res.status(200).json(listaAutor);
        } catch (error) {
            res.status(500).json({message: `${getErrorMessage(error)} - falha ao buscar os autores`});
        }
    }

    static async buscarAutorPorId (req: Request, res: Response){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            if (autorEncontrado){
                res.status(200).json(autorEncontrado);
            }else{
                res.status(200 ).json({message: "Autor não encontrado na base de dados"});
            }
            
        } catch (error) {
            res.status(500).json({message: `${getErrorMessage(error)} - falha ao buscar o autor`});
        }
    }

    static async editarAutorPorId (req: Request, res: Response){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findByIdAndUpdate(id, req.body);
            if (autorEncontrado){
                res.status(200).json({message: `Autor atualizado!`});
            }else{
                res.status(200).json({message: "Autor não encontrado na base de dados"});
            }
        } catch (error) {
            res.status(500).json({message: `${getErrorMessage(error)} - falha ao buscar o autor`});
        }
    }

    static async adicionaAutores (req: Request, res: Response){
        try{
            const novoAutor = await autor.create(req.body)
            res.status(201).json({message: "autor cadastrado com sucesso", autor: novoAutor});
        } catch (error) {
            res.status(500).json({message: `${getErrorMessage(error)} - falha ao cadastrar autor`})
        }
    }

    static async deletarAutorPorId (req: Request, res: Response){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findByIdAndDelete(id);
            if(autorEncontrado){
                res.status(200).json({message: `Autor Deletado!`});
            }else{
                res.status(200).json({message: "Autor não encontrado na base de dados"});
            }
        } catch (error) {
            res.status(500).json({message: `${getErrorMessage(error)} - falha ao buscar o Autor`});
        }
    }
}