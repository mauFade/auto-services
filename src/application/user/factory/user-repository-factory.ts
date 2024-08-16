import { UserRepository } from "../repository/user-repository";

export function userRepositoryFactory(): UserRepository {
  return UserRepository.getInstance();
}
