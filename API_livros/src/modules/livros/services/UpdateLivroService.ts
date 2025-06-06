import { getCustomRepository } from "typeorm";
import LivrosRepository from "../typeorm/repositories/LivrosRepository";
import AppError from "@shared/errors/AppError";
import { Livro } from "../typeorm/entities/Livros";

interface IRequest {
  id: string;
  titulo: string;
  autor: string;
  nota: number;
  comentario?: string;
  data_leitura: string;
  emprestadoParaLeitorId: string | null;
}

export default class UpdateLivroService {
  public async execute({
  id,
  titulo,
  autor,
  nota,
  comentario,
  data_leitura,
  emprestadoParaLeitorId,
}: IRequest): Promise<Livro> {
  const livrosRepository = getCustomRepository(LivrosRepository);

  const livro = await livrosRepository.findOne(id);

  if (!livro) {
    throw new AppError("Livro não encontrado");
  }

  const livroExistente = await livrosRepository.findOne({
    where: {
      titulo,
      emprestadoParaLeitorId,
    },
  });

  if (livroExistente && livroExistente.id !== id) {
    throw new AppError(
      "Já existe um livro com esse título emprestado para este leitor."
    );
  }

  livro.titulo = titulo;
  livro.autor = autor;
  livro.nota = nota;
  livro.comentario = comentario;
  livro.data_leitura = data_leitura;
  livro.emprestadoParaLeitorId = emprestadoParaLeitorId;

  await livrosRepository.save(livro);

  return livro;
}
}
