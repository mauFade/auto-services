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
    await this.serviceRepository.delete(data.id);
  }
}
