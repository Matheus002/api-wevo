import { Request, Response } from "express"
import { ClientRepository } from "../../repositories/implementations/ClientRepository"
import { CreateClientUseCase } from "./CreateClientUseCase"

class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  handle(request: Request, response: Response): Response {
    const { nome, cpf, email, telefone, sexo, data_nascimento } = request.body
    this.createClientUseCase.execute()

    return response.status(201).send()

  }
}

export { CreateClientController }