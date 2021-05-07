import { Controller, Get } from '@nestjs/common';
import { ClientsService } from '../services/clients.service';

@Controller()
export class ClientsController {
  constructor(private readonly appService: ClientsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
