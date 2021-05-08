import Address from '../entities/Address';
import Phone from '../entities/Phone';

export default interface ICreateClientDTO {
  name: string;
  email: string;
  cpfCnpj: string;
  phone: Phone;
  address: Address;
}
