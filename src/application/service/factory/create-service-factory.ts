import { ServiceRepository } from "../repository/service-repository";
import { CreateServiceUseCase } from "../usecase/create-service-use-case";

export function createServiceFactory(): CreateServiceUseCase {
  return CreateServiceUseCase.getInstance(ServiceRepository.getInstance());
}
