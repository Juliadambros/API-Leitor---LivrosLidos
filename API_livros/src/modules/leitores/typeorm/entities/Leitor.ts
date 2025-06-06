import { Livro } from "@modules/livros/typeorm/entities/Livros";
import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn, OneToMany,} from "typeorm";

@Entity("leitores")
export class Leitor {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  idade: number;

  @Column()
  tipo_de_livro: string;

  @Column()
  genero_favorito: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
