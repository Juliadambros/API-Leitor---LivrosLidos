import AppError from "@shared/errors/AppError";
import { Livro } from "../typeorm/entities/Livros";
import LivrosRepository from "../typeorm/repositories/LivrosRepository";
import { getCustomRepository } from "typeorm";

interface IRequest {
  titulo: string;
  autor: string;
  nota: number;
  comentario?: string;
  data_leitura: string;
  emprestadoParaLeitorId?: string | null; // pode ser omitido ou null
}

export default class CreateLivroService {
  public async execute({
    titulo,
    autor,
    nota,
    comentario,
    data_leitura,
    emprestadoParaLeitorId,
  }: IRequest): Promise<Livro> {
    const livrosRepository = getCustomRepository(LivrosRepository);

    const livroExistente = await livrosRepository.findOne({
      where: { titulo },
    });

    if (livroExistente) {
      throw new AppError("Livro com esse título já está cadastrado.");
    }

    const livro = livrosRepository.create({
      titulo,
      autor,
      nota,
      comentario,
      data_leitura,
      emprestadoParaLeitorId: emprestadoParaLeitorId ?? null,
    });

    await livrosRepository.save(livro);

    return livro;
  }
}
