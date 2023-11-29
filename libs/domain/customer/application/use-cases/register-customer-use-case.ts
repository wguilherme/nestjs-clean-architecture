import { CustomerEntity } from "../../enterprise/entity/customer.entity";
import { CustomerRepository } from "../repositories/customer-repository";

export class RegisterCustomerUseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(customer: CustomerEntity): Promise<void> {
    await this.customerRepository.registerCustomer(customer);
  }
}