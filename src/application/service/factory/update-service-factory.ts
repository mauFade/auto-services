import { ServiceRepository } from "../repository/service-repository";
import { UpdateServiceUseCase } from "../usecase/update-service-use-case";

export function updateServiceFactory(): UpdateServiceUseCase {
  return UpdateServiceUseCase.getInstance(ServiceRepository.getInstance());
}
