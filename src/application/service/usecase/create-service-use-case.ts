import { IVehicleRepository } from "@application/vehicle/model/vehicle";
import { IServiceRepository, Service } from "../model/service";
import { BadRequestError, NotFoundError } from "@application/@shared/errors";

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
  private vehicleRepository: IVehicleRepository;

  private constructor(
    serviceRepository: IServiceRepository,
    vehicleRepository: IVehicleRepository
  ) {
    this.serviceRepository = serviceRepository;
    this.vehicleRepository = vehicleRepository;
  }

  public static getInstance(
    sr: IServiceRepository,
    vr: IVehicleRepository
  ): CreateServiceUseCase {
    return new CreateServiceUseCase(sr, vr);
  }

  public async execute(data: RequestDTO): Promise<Service> {
    const vehicle = await this.vehicleRepository.findById(data.vehicleId);

    if (!vehicle) throw new NotFoundError("Vehicle nout found with this id.");

    if (vehicle.getUserId() !== data.userId)
      throw new BadRequestError("This vehicle does not belong to this user.");

    const service = await this.serviceRepository.create({
      description: data.description,
      date: new Date(data.date),
      vehicleId: vehicle.getId(),
      userId: data.userId,
      status: data.status,
      value: data.value,
    });

    service.setVehicle(vehicle);

    return service;
  }
}
