import { ClientRepository } from "../repositories/implementations/ClientRepository"

interface IRequest {
  nome: string
  cpf: string
  email: string
  telefone: string
  sexo: string
  dataNascimento: string

}


class CreateClientService {
  execute({ name, cpf,email,telefone,sexo,dataNascimento}) {
    //const clientAlreadyExists = ClientRepository.
    
  }

}

export {CreateClientService}