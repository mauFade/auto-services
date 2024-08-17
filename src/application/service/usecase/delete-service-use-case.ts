import { NotFoundError } from "@application/@shared/errors";
import { IServiceRepository } from "../model/service";

interface RequestDTO {
  id: string;
}

export class DeleteServiceUseCase {
  private serviceRepository: IServiceRepository;

  private constructor(serviceRepository: IServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public static getInstance(sr: IServiceRepository): DeleteServiceUseCase {
    return new DeleteServiceUseCase(sr);
  }

  public async execute(data: RequestDTO): Promise<void> {
    const service = await this.serviceRepository.findById(data.id);

    if (!service) throw new NotFoundError("Service not found with this id");

    await this.serviceRepository.delete(service.getId());
  }
}
