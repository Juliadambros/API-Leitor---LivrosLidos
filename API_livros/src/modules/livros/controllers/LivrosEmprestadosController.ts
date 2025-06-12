import { Request, Response, NextFunction } from "express";
import ListLivrosEmprestadosService from "../services/ListLivrosEmprestadosService";

export default class LivrosEmprestadosController {
  public async index(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const listEmprestados = new ListLivrosEmprestadosService();
      const livros = await listEmprestados.execute();
      return res.json(livros);
    } catch (error) {
      next(error);
    }
  }
}
