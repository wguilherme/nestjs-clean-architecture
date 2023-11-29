import { CustomerEntity } from "../../enterprise/entity/customer.entity";
import { CustomerAlreadyExists } from "../exceptions/CustomerAlreadyExists";
import { CustomerRepository} from "../repositories/customer-repository";

export class RegisterCustomerUseCaseValidator {
    constructor(
      private readonly customerRepository: CustomerRepository
    ) { }
    async validate({ identification }: Pick<CustomerEntity, "identification">): Promise<void> {
        const customerExists = await this.customerRepository.findByIdentification(identification);
        if (customerExists) throw new CustomerAlreadyExists()
    }
}