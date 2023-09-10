import express from "express";
import { Request, Response } from "express";
import livros from "./livrosRoutes";
import autores from "./autorRoutes";

export default function routes (app: any) {
    app.route('/').get((req: Request, res: Response) => res.status(200).send("Curso de node.js"));

    app.use(express.json(), livros, autores);
}