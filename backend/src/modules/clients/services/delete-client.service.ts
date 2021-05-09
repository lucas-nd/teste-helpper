import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Address from '../entities/Address';
import Client from '../entities/Client';
import Phone from '../entities/Phone';

@Injectable()
export class DeleteClientService {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
    @InjectRepository(Phone) private phoneRepository: Repository<Phone>,
    @InjectRepository(Address) private addressRepository: Repository<Address>,
  ) {}
  async execute(id: string) {
    const client = await this.clientRepository.findOne({
      where: { id },
      relations: ['phone', 'address'],
    });

    if (!client) {
      throw new HttpException(
        'This client does not exist in our database.',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.addressRepository.remove(client.address);
    await this.phoneRepository.remove(client.phone);
    const sucessfulDelete = await this.clientRepository.remove([client]);

    return sucessfulDelete;
  }
}
