import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

export interface IUserRepository {
  create(data: IUser): Promise<void>;
  findById(id: string): Promise<any>;
}

export const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model<IUser>("User", UserSchema);
