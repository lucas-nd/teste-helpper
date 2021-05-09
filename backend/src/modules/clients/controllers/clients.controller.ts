import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import ICreateClientDTO from '../dtos/ICreateClientDTO';
import IDeleteClientDTO from '../dtos/IDeleteClientDTO';
import { CreateClientService } from '../services/create-client.service';
import { DeleteClientService } from '../services/delete-client.service';
import { GetAllClientsService } from '../services/get-all-clients.service';

@Controller()
export class ClientsController {
  constructor(
    private createClientService: CreateClientService,
    private getAllClientsService: GetAllClientsService,
    private deleteClientService: DeleteClientService,
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

  @Delete()
  deleteClient(@Body() { id }: IDeleteClientDTO) {
    return this.deleteClientService.execute(id);
  }
}
