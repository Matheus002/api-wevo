import { getRepository, Repository } from 'typeorm';
import { Client } from '../../entities/Client'

class ClientRepository {

  private repository: Repository<Client>

  private static INSTANCE: ClientRepository

  private constructor() {
    this.repository = getRepository(Client)
  }

  public static getInstance(): ClientRepository {
    if (!ClientRepository.INSTANCE) {
      ClientRepository.INSTANCE = new ClientRepository()
    }
    return ClientRepository.INSTANCE
  }

  async create({nome, cpf, email,telefone, sexo, dataNascimento}): Promise<void> {
    // Object.assign(Client, {
    //   nome, cpf, email,telefone, sexo, data_nascimento
    // })

    const client = this.repository.create({
      nome, 
      cpf, 
      email,
      telefone, 
      sexo, 
      dataNascimento,
      status: 1
    })

    await this.repository.save(client)
  }

  async list(): Promise<Client[]> {
    const clients = await this.repository.find() 
    return clients
  }

  async findByName(nome: string): Promise<Client> {
    const client = await this.repository.findOne({ nome })
    return client
  }



}

export {ClientRepository}