import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLeitores1749211027561 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "leitores",
        columns: [
          {name: "id",type: "uuid",isPrimary: true,generationStrategy: "uuid",default: "uuid_generate_v4()",},
          {name: "nome",type: "varchar"},
          {name: "email",type: "varchar"},
          {name: "idade",type: "int"},
          {name: "tipo_de_livro",type: "varchar"},
          {name: "genero_favorito",type: "varchar"},
          {name: "created_at",type: "timestamp",default: "now()"},
          {name: "updated_at",type: "timestamp",default: "now()"},
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("leitores");
  }
}
