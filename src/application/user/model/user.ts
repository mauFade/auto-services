import mongoose, { Schema } from "mongoose";
import { CreateUserResponseDTO, IUser, UserConstructorDTO } from "../dto";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model("User", UserSchema);

export class User {
  private id: string;
  private name: string;
  private email: string;
  private password: string;

  private constructor(data: UserConstructorDTO) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }

  public static newUser(data: UserConstructorDTO): User {
    return new User(data);
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }
}

export interface IUserRepository {
  create(data: IUser): Promise<CreateUserResponseDTO>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}
