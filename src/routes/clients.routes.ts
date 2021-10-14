import { ClientRepository } from "@/modules/clients/repositories/implementations/ClientRepository";
import { CreateClientController } from "@/modules/clients/useCases/createClient/CreateClientController";
import { request, response, Router } from "express";

const clientsRoutes =  Router();
//const clientsRepository = new ClientRepository()

clientsRoutes.post('/', (request, response) => {
  return CreateClientController.handle(request, response);
  
})

clientsRoutes.get('/', (request, response) => {
  return response.json({message: "Olá Wevo"})
})

export { clientsRoutes }