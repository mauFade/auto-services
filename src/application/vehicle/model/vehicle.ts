import mongoose, { Schema } from "mongoose";
import { IVehicle, VehicleConstructorDTO } from "../dto";

const VehicleSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
});

export const VehicleModel = mongoose.model("Vehicle", VehicleSchema);

export class Vehicle {
  private id: string;
  private name: string;
  private userId: string;

  private constructor(data: VehicleConstructorDTO) {
    this.id = data.id;
    this.name = data.name;
    this.userId = data.userId;
  }

  public static newVehicle(data: VehicleConstructorDTO): Vehicle {
    return new Vehicle(data);
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getUserId(): string {
    return this.userId;
  }
}

export interface IVehicleRepository {
  create(data: IVehicle): Promise<Vehicle>;
  findById(id: string): Promise<Vehicle | undefined>;
}
