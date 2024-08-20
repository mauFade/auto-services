import { VehicleRepository } from "@application/vehicle/repository/vehicle-repository";
import { ServiceRepository } from "../repository/service-repository";
import { CreateServiceUseCase } from "../usecase/create-service-use-case";

export function createServiceFactory(): CreateServiceUseCase {
  return CreateServiceUseCase.getInstance(
    ServiceRepository.getInstance(),
    VehicleRepository.getInstance()
  );
}
