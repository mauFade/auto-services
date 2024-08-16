import mongoose from "mongoose";

import { IService } from "../dto";
import { IServiceRepository, Service, ServiceModel } from "../model/service";

export class ServiceRepository implements IServiceRepository {
  private serviceModel: typeof ServiceModel;

  private constructor() {
    this.serviceModel = ServiceModel;
  }

  public static getInstance(): ServiceRepository {
    return new ServiceRepository();
  }

  public async create(data: IService): Promise<Service> {
    const { _id, description, date, vehicleId, userId, status, value } =
      await this.serviceModel.create({
        description: data.description,
        date: data.date,
        vehicleId: data.vehicleId,
        userId: data.userId,
        status: data.status,
        value: data.value,
      });

    return Service.newService({
      id: _id.toString(),
      description,
      date,
      vehicleId,
      userId,
      status,
      value,
    });
  }

  public async findById(id: string): Promise<Service | undefined> {
    const result = await this.serviceModel.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (!result) return undefined;

    return Service.newService({
      id: result._id.toString(),
      description: result.description,
      date: result.date,
      vehicleId: result.vehicleId,
      userId: result.userId,
      status: result.status,
      value: result.value,
    });
  }

  public async listAll(): Promise<Service[]> {
    const result = await this.serviceModel.find();

    return result.map((r) => {
      return Service.newService({
        id: r._id.toString(),
        description: r.description,
        date: r.date,
        vehicleId: r.vehicleId,
        userId: r.userId,
        status: r.status,
        value: r.value,
      });
    });
  }

  public async update(service: Service): Promise<void> {
    await this.serviceModel.updateOne(
      { _id: new mongoose.Types.ObjectId(service.getId()) },
      {
        description: service.getDescription(),
        date: service.getDate(),
        vehicleId: service.getVehicleId(),
        userId: service.getUserId(),
        status: service.getStatus(),
        value: service.getValue(),
      }
    );
  }

  public async delete(id: string): Promise<void> {
    await this.serviceModel.findByIdAndDelete(new mongoose.Types.ObjectId(id));
  }
}
