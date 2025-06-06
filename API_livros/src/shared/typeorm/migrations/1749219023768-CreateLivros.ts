import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLivros1749219023768 implements MigrationInterface {

     public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "livros",
        columns: [
          { name: "id", type: "uuid", isPrimary: true, generationStrategy: "uuid", default: "uuid_generate_v4()" },
          { name: "titulo", type: "varchar" },
          { name: "autor", type: "varchar" },
          { name: "nota", type: "int" },
          { name: "comentario", type: "text", isNullable: true },
          { name: "data_leitura", type: "date" },
          { name: "emprestadoParaLeitorId", type: "uuid", isNullable: true },  
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("livros");
  }

}
