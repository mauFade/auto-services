import { ServiceRepository } from "../repository/service-repository";
import { ListServiceByIdUseCase } from "../usecase/list-service-by-id-use-case";

export function listServiceByIdFactory(): ListServiceByIdUseCase {
  return ListServiceByIdUseCase.getInstance(ServiceRepository.getInstance());
}
