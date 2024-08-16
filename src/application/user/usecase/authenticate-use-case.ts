import jwt from "jsonwebtoken";

import { IBCryptRepository } from "@infra/bcrypt/model";
import { IUserRepository } from "../model/user";

interface RequestDTO {
  email: string;
  password: string;
}

interface ResponseDTO {
  id: string;
  name: string;
  token: string;
}

export class AuthenticateUseCase {
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
  ): AuthenticateUseCase {
    return new AuthenticateUseCase(ur, bc);
  }

  public async execute(data: RequestDTO): Promise<ResponseDTO> {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) throw new Error("User not found with this id");

    const isValidPassword = await this.bCryptAdapter.compare(
      data.password,
      user.getPassword()
    );

    if (!isValidPassword) throw new Error("Invalid password");

    const tokenValidator = await this.bCryptAdapter.create("authentication");

    const token = jwt.sign(
      {
        user: {
          id: user.getId(),
          email: user.getEmail(),
        },
        tokenValidator,
      },
      "user-auth",
      {
        expiresIn: "1d",
      }
    );

    return {
      id: user.getId(),
      name: user.getName(),
      token,
    };
  }
}
