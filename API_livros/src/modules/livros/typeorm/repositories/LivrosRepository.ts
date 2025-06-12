import { EntityRepository, Repository, IsNull, Not } from "typeorm";
import { Livro } from "../entities/Livros";

@EntityRepository(Livro)
export default class LivrosRepository extends Repository<Livro> {
  public async findByTitulo(titulo: string): Promise<Livro | undefined> {
    return await this.findOne({
      where: { titulo },
      relations: ["emprestadoPara"], 
    });
  }

  // Lista apenas os livros que estão emprestados
  public async findEmprestados(): Promise<Livro[]> {
    return await this.find({
      where: { emprestadoParaLeitorId: Not(IsNull()) },
      relations: ["emprestadoPara"], 
    });
  }

  // Lista todos os livros com seus leitores
  public async findAllComLeitor(): Promise<Livro[]> {
    return await this.find({
      relations: ["emprestadoPara"], 
    });
  }

  // Busca um livro por ID, incluindo o leitor
  public async findByIdComLeitor(id: string): Promise<Livro | undefined> {
    return await this.findOne({
      where: { id },
      relations: ["emprestadoPara"], 
    });
  }
}
