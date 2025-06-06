import { getCustomRepository } from "typeorm";
import { Leitor } from "../typeorm/entities/Leitor";
import LeitorRepository from "../typeorm/repositories/LeitorRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string;
  nome: string;
  email: string;
  idade: number;
  tipo_de_livro: string;
  genero_favorito: string;
}

export default class UpdateLeitorService {
  public async execute({
    id,
    nome,
    email,
    idade,
    tipo_de_livro,
    genero_favorito,
  }: IRequest): Promise<Leitor> {
    const leitorRepository = getCustomRepository(LeitorRepository);

    const leitor = await leitorRepository.findById(id);

    if (!leitor) {
      throw new AppError("Leitor não encontrado.");
    }

    const leitorExistente = await leitorRepository.findByEmail(email);

    if (leitorExistente && email !== leitor.email) {
      throw new AppError("Este e-mail já está sendo utilizado por outro leitor.");
    }

    leitor.nome = nome;
    leitor.email = email;
    leitor.idade = idade;
    leitor.tipo_de_livro = tipo_de_livro;
    leitor.genero_favorito = genero_favorito;

    await leitorRepository.save(leitor);

    return leitor;
  }
}
