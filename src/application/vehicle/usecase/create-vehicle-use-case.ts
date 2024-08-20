import { IVehicleRepository, Vehicle } from "../model/vehicle";

interface RequestDTO {
  userId: string;
  name: string;
}

export class CreateVehicleUseCase {
  private vehicleRepository: IVehicleRepository;

  private constructor(vehicleRepository: IVehicleRepository) {
    this.vehicleRepository = vehicleRepository;
  }

  public static getInstance(vr: IVehicleRepository): CreateVehicleUseCase {
    return new CreateVehicleUseCase(vr);
  }

  public async execute(data: RequestDTO): Promise<Vehicle> {
    const newVehicle = await this.vehicleRepository.create({
      name: data.name,
      userId: data.userId,
    });

    return newVehicle;
  }
}
