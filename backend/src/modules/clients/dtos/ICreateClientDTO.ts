import Address from '../entities/Address';

export default interface ICreateClientDTO {
  name: string;
  email: string;
  cpfCnpj: string;
  phone: string;
  address: Address;
}
