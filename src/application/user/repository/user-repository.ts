import mongoose from "mongoose";
import { CreateUserResponseDTO, IUser } from "../dto";
import { IUserRepository, User, UserModel } from "../model/user";

export class UserRepository implements IUserRepository {
  private userModel: typeof UserModel;

  private constructor() {
    this.userModel = UserModel;
  }

  public static getInstance(): UserRepository {
    return new UserRepository();
  }

  public async create(data: IUser): Promise<CreateUserResponseDTO> {
    const { _id, name, email } = await this.userModel.create({
      email: data.email,
      name: data.name,
      password: data.password,
    });

    return {
      id: _id.toString(),
      name,
      email,
    };
  }

  public async findById(id: string): Promise<User | undefined> {
    const result = await this.userModel.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (!result) return undefined;

    return User.newUser({
      id: result._id.toString(),
      name: result.name,
      email: result.email,
      password: result.password,
    });
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const result = await this.userModel.findOne({ email });

    if (!result) return undefined;

    return User.newUser({
      id: result._id.toString(),
      name: result.name,
      email: result.email,
      password: result.password,
    });
  }
}
