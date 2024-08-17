import { IBCryptRepository } from "@infra/bcrypt/model";
import { IUserRepository } from "../model/user";
import { CreateUserResponseDTO } from "../dto";
import {
  AlreadyExistError,
  ValidationError,
} from "@application/@shared/errors";

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  private userRepository: IUserRepository;
  private bCryptAdapter: IBCryptRepository;

  private constructor(
    userRepository: IUserRepository,
    bCryptAdapter: IBCryptRepository
  ) {
    this.userRepository = userRepository;
    this.bCryptAdapter = bCryptAdapter;
  }

  public static getInstance(
    ur: IUserRepository,
    bc: IBCryptRepository
  ): CreateUserUseCase {
    return new CreateUserUseCase(ur, bc);
  }

  public async execute(data: CreateUserDTO): Promise<CreateUserResponseDTO> {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) throw new AlreadyExistError("User already exists");

    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email);

    if (!isValidEmail) throw new ValidationError("Invalid email.");

    const hashPass = await this.bCryptAdapter.create(data.password);

    const user = await this.userRepository.create({
      name: data.name,
      email: data.email,
      password: hashPass,
    });

    return user;
  }
}
