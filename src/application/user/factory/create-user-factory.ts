import { CreateUserUseCase } from "../usecase/create-user-use-case";
import { userRepositoryFactory } from "./user-repository-factory";

export function createUserfactory(): CreateUserUseCase {
  return CreateUserUseCase.getInstance(userRepositoryFactory());
}
