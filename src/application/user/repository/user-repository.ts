import { IUser, IUserRepository, UserModel } from "../model/user";

export class UserRepository implements IUserRepository {
  private constructor() {}

  public static getInstance(): UserRepository {
    return new UserRepository();
  }

  public async create(data: IUser): Promise<void> {
    await UserModel.create(data);
  }

  public async findById(id: string): Promise<any> {
    const result = await UserModel.findById(id);

    return result;
  }
}
