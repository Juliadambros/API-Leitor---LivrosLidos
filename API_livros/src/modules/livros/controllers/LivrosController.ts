import { Request, Response, NextFunction } from "express";
import ListLivroService from "../services/ListLivroService";
import CreateLivroService from "../services/CreateLivroService";
import UpdateLivroService from "../services/UpdateLivroService";
import DeleteLivroService from "../services/DeleteLivroService";
import ShowLivroService from "../services/ShowLivroService";

export default class LivrosController {
  public async index(request: Request,response: Response,next: NextFunction): Promise<Response | void> {
    try {
      const listLivros = new ListLivroService();
      const livros = await listLivros.execute();
      return response.json(livros);
    } catch (err) {
      next(err);
    }
  }

  public async show(request: Request,response: Response,next: NextFunction): Promise<Response | void> {
    try {
      const { id } = request.params;
      const showLivro = new ShowLivroService();
      const livro = await showLivro.execute({ id });
      return response.json(livro);
    } catch (err) {
      next(err);
    }
  }

  public async create(request: Request,response: Response,next: NextFunction): Promise<Response | void> {
    try {
      const {titulo,autor,nota,comentario,data_leitura,emprestadoParaLeitorId} = request.body;

      const createLivro = new CreateLivroService();
      const livro = await createLivro.execute({titulo,autor,nota,comentario,data_leitura, emprestadoParaLeitorId});
 
      return response.json(livro);
    } catch (err) {
      next(err);
    }
  }

  public async update(request: Request,response: Response,next: NextFunction): Promise<Response | void> {
    try {
      const { id } = request.params;
      const {titulo,autor,nota,comentario,data_leitura, emprestadoParaLeitorId} = request.body;

      const updateLivro = new UpdateLivroService();
      const livro = await updateLivro.execute({id,titulo,autor,nota,comentario,data_leitura,emprestadoParaLeitorId});

      return response.json(livro);
    } catch (err) {
      next(err);
    }
  }

  public async delete(request: Request,response: Response,next: NextFunction): Promise<Response | void> {
    try {
        const { id } = request.params;
        const deleteLivro = new DeleteLivroService();
        await deleteLivro.execute({ id });

        return response.json([]); 
    } catch (err) {
        next(err);
    }
    }

}
