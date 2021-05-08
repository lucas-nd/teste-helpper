import { Body, Controller, Post } from '@nestjs/common';
import ICreateClientDTO from '../dtos/ICreateClientDTO';
import { CreateClientService } from '../services/create-client.service';

@Controller()
export class ClientsController {
  constructor(private createClientService: CreateClientService) {}

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
}
