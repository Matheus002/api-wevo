import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClients1634093220774 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clients",
                columns: [  
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "cpf",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "telefone",
                        type: "varchar"
                    },
                    {
                        name: "sexo",
                        type: "varchar"
                    },
                    {
                        name: "DataNascimento",
                        type: "varchar"
                    }
                ],
            )}        
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
