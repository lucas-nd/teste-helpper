import { Body, Controller, Get, Post } from '@nestjs/common';
import ICreateClientDTO from '../dtos/ICreateClientDTO';
import { CreateClientService } from '../services/create-client.service';
import { GetAllClientsService } from '../services/get-all-clients.service';

@Controller()
export class ClientsController {
  constructor(
    private createClientService: CreateClientService,
    private getAllClientsService: GetAllClientsService,
  ) {}

  @Post()
  createClient(
    @Body()
    { name, email, cpfCnpj, phone, address }: ICreateClientDTO,
  ) {
    const client = this.createClientService.execute({
      name,
      email,
      cpfCnpj,
      phone,
      address,
    });

    return client;
  }

  @Get()
  getAllClients() {
    const data = this.getAllClientsService.execute();
    return data;
  }
}
