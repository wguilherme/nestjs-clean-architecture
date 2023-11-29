import { CustomerEntity } from "../../enterprise/entity/customer.entity";

interface RegisterCustomerRequest extends CustomerEntity {}
interface RegisterCustomerResponse { success: boolean}

export interface CustomerRepository {
    registerCustomer(customer: RegisterCustomerRequest): Promise<RegisterCustomerResponse>;
    findByIdentification(identification: string): Promise<CustomerEntity | undefined>;
}