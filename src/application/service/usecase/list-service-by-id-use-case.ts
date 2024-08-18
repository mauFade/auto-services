import { NotFoundError } from "@application/@shared/errors";
import { IServiceRepository, Service } from "../model/service";

interface RequestDTO {
  serviceId: string;
}

export class ListServiceByIdUseCase {
  private serviceRepository: IServiceRepository;

  private constructor(serviceRepository: IServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public static getInstance(sr: IServiceRepository): ListServiceByIdUseCase {
    return new ListServiceByIdUseCase(sr);
  }

  public async execute(data: RequestDTO): Promise<Service> {
    const service = await this.serviceRepository.findById(data.serviceId);

    if (!service) throw new NotFoundError("Service not found with this id.");

    return service;
  }
}
