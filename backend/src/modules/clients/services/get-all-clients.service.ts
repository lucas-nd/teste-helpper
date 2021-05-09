import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Client from '../entities/Client';

@Injectable()
export class GetAllClientsService {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}
  async execute(): Promise<Client[]> {
    const data = await this.clientRepository.find({
      relations: ['phone', 'address'],
    });

    if (!data) {
      throw new HttpException('Data is not found.', HttpStatus.NOT_FOUND);
    }

    return data;
  }
}
