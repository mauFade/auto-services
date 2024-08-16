import mongoose, { ObjectId } from "mongoose";

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

  public async create(data: IService): Promise<void> {
    await this.serviceModel.create({
      description: data.description,
      date: data.date,
      vehicleId: data.vehicleId,
      userId: data.userId,
      status: data.status,
      value: data.value,
    });
  }

  public async listAll(): Promise<Service[]> {
    const result = await this.serviceModel.find();

    return result.map((r) => {
      return Service.newService({
        id: r.id,
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
