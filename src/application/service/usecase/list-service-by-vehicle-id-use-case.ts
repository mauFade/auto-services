import { IServiceRepository, Service } from "../model/service";

interface RequestDTO {
  vehicleId: string;
}

export class ListServiceByVehicleIdUseCase {
  private serviceRepository: IServiceRepository;

  private constructor(serviceRepository: IServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public static getInstance(
    sr: IServiceRepository
  ): ListServiceByVehicleIdUseCase {
    return new ListServiceByVehicleIdUseCase(sr);
  }

  public async execute(data: RequestDTO): Promise<Service[]> {
    const services = await this.serviceRepository.findByVehicleId(
      data.vehicleId
    );

    return services;
  }
}
