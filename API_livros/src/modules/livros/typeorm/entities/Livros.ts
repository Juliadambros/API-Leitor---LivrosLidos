import { Leitor } from "@modules/leitores/typeorm/entities/Leitor";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity("livros")
export class Livro {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column("int")
  nota: number;

  @ManyToOne(() => Leitor, leitor => leitor.livrosEmprestados, {
    eager: true, // Carrega o leitor automaticamente ao buscar o livro 
    nullable: true,
  })
  @JoinColumn({ name: "emprestadoParaLeitorId" })
  emprestadoPara: Leitor;

  @Column({ type: "text", nullable: true })
  comentario: string;

  @Column({ type: "date" })
  data_leitura: string;

  @Column({ type: "uuid", nullable: true })
  emprestadoParaLeitorId: string | null;  // apenas o ID do leitor

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
