import { getCustomRepository } from "typeorm";
import LivrosRepository from "../typeorm/repositories/LivrosRepository";
import { Livro } from "../typeorm/entities/Livros";

export default class ListLivroService {
  public async execute(): Promise<Livro[]> {
    const livrosRepository = getCustomRepository(LivrosRepository);

    const livros = await livrosRepository.find();

    return livros;
  }
}
