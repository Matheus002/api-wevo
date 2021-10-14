import { Client } from "../entities/Client";

interface ICreateClientDTO {
  nome: string
  cpf: string
  email: string
  telefone: string
  sexo: string
  dataNascimento: string

}

interface IClientRepository {
  list(): Promise<Client[]>
  create({ 
    nome, 
    cpf, 
    email,
    telefone, 
    sexo, 
    dataNascimento
   }: ICreateClientDTO): Promise<void>
}

export { ICreateClientDTO}