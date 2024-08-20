import { VehicleRepository } from "../repository/vehicle-repository";
import { CreateVehicleUseCase } from "../usecase/create-vehicle-use-case";

export function createVehicleFactory(): CreateVehicleUseCase {
  return CreateVehicleUseCase.getInstance(VehicleRepository.getInstance());
}
