import { getCustomRepository } from "typeorm";
import { Leitor } from "../typeorm/entities/Leitor";
import LeitorRepository from "../typeorm/repositories/LeitorRepository";

export default class ListLeitorService {
  public async execute(): Promise<Leitor[]> {
    const leitorRepository = getCustomRepository(LeitorRepository);

    const leitores = await leitorRepository.find();

    return leitores;
  }
}
