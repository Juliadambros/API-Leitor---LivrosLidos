import { EntityRepository, Repository } from "typeorm";
import { Leitor } from "../entities/Leitor";


@EntityRepository(Leitor)
export default class LeitorRepository extends Repository<Leitor> {
  
  public async findByNome(nome: string): Promise<Leitor | undefined> {
    return this.findOne({ where: { nome } });
  }

  public async findById(id: string): Promise<Leitor | undefined> {
    return this.findOne({ where: { id } });
  }

  public async findByEmail(email: string): Promise<Leitor | undefined> {
    return this.findOne({ where: { email } });
  }

  public async findByGeneroFavorito(genero: string): Promise<Leitor[]> {
    return this.find({ where: { genero_favorito: genero } });
  }

  public async findByTipoDeLivro(tipo: string): Promise<Leitor[]> {
    return this.find({ where: { tipo_de_livro: tipo } });
  }

}
