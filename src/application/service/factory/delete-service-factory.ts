import { ServiceRepository } from "../repository/service-repository";
import { DeleteServiceUseCase } from "../usecase/delete-service-use-case";

export function deleteServiceFactory(): DeleteServiceUseCase {
  return DeleteServiceUseCase.getInstance(ServiceRepository.getInstance());
}
