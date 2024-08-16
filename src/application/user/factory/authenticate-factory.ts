import { bCryptAdapterFactory } from "@infra/bcrypt/factory";
import { AuthenticateUseCase } from "../usecase/authenticate-use-case";
import { userRepositoryFactory } from "./user-repository-factory";

export function authenticateFactory(): AuthenticateUseCase {
  return AuthenticateUseCase.getInstance(
    userRepositoryFactory(),
    bCryptAdapterFactory()
  );
}
