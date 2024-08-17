import { IServiceRepository, Service } from "../model/service";

interface RequestDTO {
  id: string;
  description: string;
  date: Date;
  vehicleId: string;
  userId: string;
  status: string;
  value: number;
}

export class UpdateServiceUseCase {
  private serviceRepository: IServiceRepository;

  private constructor(serviceRepository: IServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public static getInstance(sr: IServiceRepository): UpdateServiceUseCase {
    return new UpdateServiceUseCase(sr);
  }

  public async execute(data: RequestDTO): Promise<Service> {
    const service = await this.serviceRepository.findById(data.id);

    if (!service) throw new Error("Service not found with this id");

    this.updateData(service, data);

    await this.serviceRepository.update(service);

    return service;
  }

  private updateData(service: Service, data: RequestDTO): void {
    if (service.getDescription() !== data.description)
      service.setDescription(data.description);

    if (service.getDate() !== data.date) service.setDate(data.date);

    if (service.getVehicleId() !== data.vehicleId)
      service.setVehicleId(data.vehicleId);

    if (service.getUserId() !== data.userId) service.setUserId(data.userId);

    if (service.getStatus() !== data.status) service.setStatus(data.status);

    if (service.getValue() !== data.value) service.setValue(data.value);
  }
}
