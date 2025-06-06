import { Request, Response, NextFunction } from "express";
import ListLeitorService from "../services/ListLeitorService";
import ShowLeitorService from "../services/ShowLeitorService";
import CreateLeitorService from "../services/CreateLeitorService";
import UpdateLeitorService from "../services/UpdateLeitorService";
import DeleteLeitorService from "../services/DeleteLeitorService";

export default class LeitoresController {
  public async index(request: Request,response: Response,next: NextFunction): Promise<Response | void> {
    try {
      const listLeitores = new ListLeitorService();
      const leitores = await listLeitores.execute();
      return response.json(leitores);
    } catch (err) {
      next(err);
    }
  }

  public async show(request: Request,response: Response,next: NextFunction): Promise<Response | void> {
    try {
      const { id } = request.params;
      const showLeitor = new ShowLeitorService();
      const leitor = await showLeitor.execute({ id });
      return response.json(leitor);
    } catch (err) {
      next(err);
    }
  }

  public async create(request: Request,response: Response,next: NextFunction): Promise<Response | void> {
    try {
      const { nome, email, idade, tipo_de_livro, genero_favorito } = request.body;
      const createLeitor = new CreateLeitorService();
      const leitor = await createLeitor.execute({
        nome,
        email,
        idade,
        tipo_de_livro,
        genero_favorito,
      });
      return response.json(leitor);
    } catch (err) {
      next(err);
    }
  }

  public async update(request: Request,response: Response,next: NextFunction): Promise<Response | void> {
    try {
      const { id } = request.params;
      const { nome, email, idade, tipo_de_livro, genero_favorito } = request.body;
      const updateLeitor = new UpdateLeitorService();
      const leitor = await updateLeitor.execute({
        id,
        nome,
        email,
        idade,
        tipo_de_livro,
        genero_favorito,
      });
      return response.json(leitor);
    } catch (err) {
      next(err);
    }
  }

  public async delete(request: Request,response: Response,next: NextFunction): Promise<Response | void> {
    try {
      const { id } = request.params;
      const deleteLeitor = new DeleteLeitorService();
      await deleteLeitor.execute({ id });
      return response.json([]);
    } catch (err) {
      next(err);
    }
  }
}
