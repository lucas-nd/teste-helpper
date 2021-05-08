import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ICreateClientDTO from '../dtos/ICreateClientDTO';
import Client from '../entities/Client';

@Injectable()
export class CreateClientService {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}
  async execute({
    name,
    email,
    cpfCnpj,
    phone,
    address,
  }: ICreateClientDTO): Promise<Client> {
    const clientExists = await this.clientRepository.findOne({
      where: { email },
    });

    if (clientExists) {
      throw new HttpException(
        'This email already in use.',
        HttpStatus.CONFLICT,
      );
    }

    const client = this.clientRepository.create({
      name,
      email,
      cpfCnpj,
      phone: [phone],
      address: [address],
    });

    await this.clientRepository.save(client);
    return client;
  }
}
