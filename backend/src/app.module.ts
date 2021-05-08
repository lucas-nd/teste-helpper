import { Module } from '@nestjs/common';
import { ClientsModule } from './modules/clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import Client from './modules/clients/entities/Client';
import Address from './modules/clients/entities/Address';
import { ConfigModule } from '@nestjs/config';
import Phone from './modules/clients/entities/Phone';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Client, Address, Phone],
    }),
    TypeOrmModule.forFeature([Client, Address, Phone]),
    ClientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
