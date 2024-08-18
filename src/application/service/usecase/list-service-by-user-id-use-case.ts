import { IServiceRepository, Service } from "../model/service";

interface RequestDTO {
  userId: string;
}

export class ListServiceByUserIdUseCase {
  private serviceRepository: IServiceRepository;

  private constructor(serviceRepository: IServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public static getInstance(
    sr: IServiceRepository
  ): ListServiceByUserIdUseCase {
    return new ListServiceByUserIdUseCase(sr);
  }

  public async execute(data: RequestDTO): Promise<Service[]> {
    const services = await this.serviceRepository.findByUserId(data.userId);

    return services;
  }
}
