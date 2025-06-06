import { getCustomRepository } from "typeorm";
import { Leitor } from "../typeorm/entities/Leitor";
import LeitorRepository from "../typeorm/repositories/LeitorRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  nome: string;
  email: string;
  idade: number;
  tipo_de_livro: string;
  genero_favorito: string;
}

export default class CreateLeitorService {
  public async execute({
    nome,
    email,
    idade,
    tipo_de_livro,
    genero_favorito
  }: IRequest): Promise<Leitor> {
    
    const leitorRepository = getCustomRepository(LeitorRepository);

    const emailExist = await leitorRepository.findByEmail(email);

    if (emailExist) {
      throw new AppError("Email já cadastrado.");
    }

    const leitor = leitorRepository.create({
      nome,
      email,
      idade,
      tipo_de_livro,
      genero_favorito
    });

    await leitorRepository.save(leitor);

    return leitor;
  }
}
