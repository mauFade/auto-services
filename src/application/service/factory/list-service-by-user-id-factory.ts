import { ServiceRepository } from "../repository/service-repository";
import { ListServiceByUserIdUseCase } from "../usecase/list-service-by-user-id-use-case";

export function listServiceByUserIdFactory(): ListServiceByUserIdUseCase {
  return ListServiceByUserIdUseCase.getInstance(
    ServiceRepository.getInstance()
  );
}
