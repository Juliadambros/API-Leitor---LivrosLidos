import { getCustomRepository } from "typeorm";
import LivrosRepository from "../typeorm/repositories/LivrosRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string;
}

export default class DeleteLivroService {
  public async execute({ id }: IRequest): Promise<void> {
    const livrosRepository = getCustomRepository(LivrosRepository);

    const livro = await livrosRepository.findOne(id);

    if (!livro) {
      throw new AppError("Livro não encontrado.");
    }

    await livrosRepository.remove(livro);
  }
}
