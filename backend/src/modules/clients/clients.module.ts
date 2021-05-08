import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './controllers/clients.controller';
import Address from './entities/Address';
import Client from './entities/Client';
import { ClientsService } from './services/clients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Address])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
