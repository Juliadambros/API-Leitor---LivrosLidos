import { getCustomRepository } from "typeorm";
import LivrosRepository from "../typeorm/repositories/LivrosRepository";
import AppError from "@shared/errors/AppError";
import { Livro } from "../typeorm/entities/Livros";

interface IRequest {
  id: string;
}

export default class ShowLivroService {
  public async execute({ id }: IRequest): Promise<Livro> {
    const livrosRepository = getCustomRepository(LivrosRepository);

    const livro = await livrosRepository.findOne(id);

    if (!livro) {
      throw new AppError("Livro não encontrado");
    }

    return livro;
  }
}
