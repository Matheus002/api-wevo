import { ClientRepository } from "@/modules/clients/repositories/implementations/ClientRepository";
import { request, response, Router } from "express";

const clientsRoutes =  Router();
//const clientsRepository = new ClientRepository()

clientsRoutes.post('/', (request, response) => {
  const { nome, cpf, email, telefone, sexo, data_nascimento } = request.body
  
  //const clientAlreadyExist
})

clientsRoutes.get('/', (request, response) => {
  return response.json({message: "Olá Wevo"})
})

export { clientsRoutes }