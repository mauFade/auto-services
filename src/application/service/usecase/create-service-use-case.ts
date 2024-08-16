import { IServiceRepository, Service } from "../model/service";

interface RequestDTO {
  description: string;
  date: Date;
  vehicleId: string;
  userId: string;
  status: string;
  value: number;
}

export class CreateServiceUseCase {
  private serviceRepository: IServiceRepository;

  private constructor(serviceRepository: IServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public static getInstance(sr: IServiceRepository): CreateServiceUseCase {
    return new CreateServiceUseCase(sr);
  }

  public async execute(data: RequestDTO): Promise<Service> {
    const service = await this.serviceRepository.create({
      description: data.description,
      date: new Date(data.date),
      vehicleId: data.vehicleId,
      userId: data.userId,
      status: data.status,
      value: data.value,
    });

    return service;
  }
}
