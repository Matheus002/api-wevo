import {v4 as uuidV4} from 'uuid'
import {Column, Entity, PrimaryColumn} from 'typeorm'

@Entity("clients")
class Client {
  @PrimaryColumn()
  id?: string

  @Column()
  nome: string

  @Column()
  cpf: string

  @Column()
  email: string

  @Column()
  telefone: string

  @Column()
  sexo: string

  @Column('data_nascimento')
  dataNascimento: string

  @Column()
  status: number

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export {Client}