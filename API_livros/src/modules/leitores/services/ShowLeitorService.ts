import { getCustomRepository } from "typeorm";
import { Leitor } from "../typeorm/entities/Leitor";
import LeitorRepository from "../typeorm/repositories/LeitorRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string;
}

export default class ShowLeitorService {
  public async execute({ id }: IRequest): Promise<Leitor> {
    const leitorRepository = getCustomRepository(LeitorRepository);

    const leitor = await leitorRepository.findById(id);

    if (!leitor) {
      throw new AppError("Leitor não encontrado.");
    }

    return leitor;
  }
}
