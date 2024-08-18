import { ServiceRepository } from "../repository/service-repository";
import { ListServiceUseCase } from "../usecase/list-services-use-case";

export function listServiceFactory(): ListServiceUseCase {
  return ListServiceUseCase.getInstance(ServiceRepository.getInstance());
}
