import { getCustomRepository } from "typeorm";
import LivrosRepository from "../typeorm/repositories/LivrosRepository";

export default class ListLivrosEmprestadosService {
  public async execute() {
    const repo = getCustomRepository(LivrosRepository);
    const livros = await repo.findEmprestados();

    return livros.map(livro => ({
      id: livro.id,
      titulo: livro.titulo,
      autor: livro.autor,
      nomeLeitor: livro.emprestadoPara?.nome ?? null,
    }));
  }
}