import { IServiceRepository, Service } from "../model/service";

export class ListServiceUseCase {
  private serviceRepository: IServiceRepository;

  private constructor(serviceRepository: IServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public static getInstance(sr: IServiceRepository): ListServiceUseCase {
    return new ListServiceUseCase(sr);
  }

  public async execute(): Promise<Service[]> {
    const services = await this.serviceRepository.listAll();

    return services;
  }
}
