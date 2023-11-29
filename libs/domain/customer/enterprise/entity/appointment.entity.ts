import { CustomerEntity } from "./customer.entity";
import { ServiceEntity } from "./service.entity";

export class AppointmentEntity {
  identification: string;
  date: string;
  time: string;
  customer: CustomerEntity;
  service: ServiceEntity;
}