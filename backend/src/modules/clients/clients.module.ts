import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './controllers/clients.controller';
import Address from './entities/Address';
import Client from './entities/Client';
import Phone from './entities/Phone';
import { CreateClientService } from './services/create-client.service';
import { DeleteClientService } from './services/delete-client.service';
import { GetAllClientsService } from './services/get-all-clients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Address, Phone])],
  controllers: [ClientsController],
  providers: [CreateClientService, GetAllClientsService, DeleteClientService],
})
export class ClientsModule {}
