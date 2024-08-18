import { ServiceRepository } from "../repository/service-repository";
import { ListServiceByVehicleIdUseCase } from "../usecase/list-service-by-vehicle-id-use-case";

export function listServiceByVehicleIdFactory(): ListServiceByVehicleIdUseCase {
  return ListServiceByVehicleIdUseCase.getInstance(
    ServiceRepository.getInstance()
  );
}
