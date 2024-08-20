import {
  IUser,
  CreateUserResponseDTO,
} from "../../../src/application/user/dto";
import {
  IUserRepository,
  User,
} from "../../../src/application/user/model/user";

export class UserRepositoryMock implements IUserRepository {
  private users: User[] = [];

  public async create(data: IUser): Promise<CreateUserResponseDTO> {
    const user = User.newUser({
      email: data.email,
      id: "test",
      name: data.name,
      password: data.password,
    });

    this.users.push(user);

    return {
      email: user.getEmail(),
      id: user.getId(),
      name: user.getName(),
    };
  }

  public async findById(id: string): Promise<User | undefined> {
    return [
      User.newUser({
        email: "test",
        id: "test",
        name: "test",
        password: "test",
      }),
    ].find((u) => u.getId() === id);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return [
      User.newUser({
        email: "test",
        id: "test",
        name: "test",
        password: "test",
      }),
    ].find((u) => u.getEmail() === email);
  }
}
