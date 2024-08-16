import { CreateUserResponseDTO } from "../dto";
import { IUser, IUserRepository, UserModel } from "../model/user";

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

  public async findById(id: string): Promise<IUser | null> {
    const result = await this.userModel.findOne({ _id: new Object(id) });

    return result;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const result = await this.userModel.findOne({ email });

    return result;
  }
}
