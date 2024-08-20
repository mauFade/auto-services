import mongoose from "mongoose";
import { IVehicle } from "../dto";
import { IVehicleRepository, Vehicle, VehicleModel } from "../model/vehicle";

export class VehicleRepository implements IVehicleRepository {
  private vehicleModel: typeof VehicleModel;

  private constructor() {
    this.vehicleModel = VehicleModel;
  }

  public static getInstance(): VehicleRepository {
    return new VehicleRepository();
  }

  public async create(data: IVehicle): Promise<Vehicle> {
    const { _id, name, userId } = await this.vehicleModel.create({
      name: data.name,
      userId: data.userId,
    });

    return Vehicle.newVehicle({
      id: _id.toString(),
      name,
      userId,
    });
  }

  public async findById(id: string): Promise<Vehicle | undefined> {
    const result = await this.vehicleModel.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (!result) return undefined;

    return Vehicle.newVehicle({
      id: result.id,
      name: result.name,
      userId: result.userId,
    });
  }
}
