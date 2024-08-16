import { IUserRepository } from "../model/user";

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  private userRepository: IUserRepository;

  private constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public static getInstance(ur: IUserRepository): CreateUserUseCase {
    return new CreateUserUseCase(ur);
  }

  public async execute(data: CreateUserDTO): Promise<void> {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) throw new Error("User already exists");

    await this.userRepository.create({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  }
}
