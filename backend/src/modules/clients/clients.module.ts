import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './controllers/clients.controller';
import Address from './entities/Address';
import Client from './entities/Client';
import { ClientsService } from './services/clients.service';
import { CreateClientService } from './services/create-client.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Address])],
  controllers: [ClientsController],
  providers: [ClientsService, CreateClientService],
})
export class ClientsModule {}
