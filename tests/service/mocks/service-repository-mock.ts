import { IService } from "../../../src/application/service/dto";
import {
  IServiceRepository,
  Service,
} from "../../../src/application/service/model/service";

export class ServiceRepositoryMock implements IServiceRepository {
  private services: Service[];

  public async create(data: IService): Promise<Service> {
    const s = Service.newService({
      date: data.date,
      description: data.description,
      id: "test",
      status: data.status,
      userId: data.userId,
      value: data.value,
      vehicleId: data.vehicleId,
    });

    this.services.push(s);

    return s;
  }

  public async findById(id: string): Promise<Service | undefined> {
    return [
      Service.newService({
        date: new Date(),
        description: "test",
        id: "test",
        status: "test",
        userId: "test",
        value: 10,
        vehicleId: "test",
      }),
    ].find((s) => s.getId() === id);
  }

  public async findByUserId(id: string): Promise<Service[]> {
    return [
      Service.newService({
        date: new Date(),
        description: "test",
        id: "test",
        status: "test",
        userId: "test",
        value: 10,
        vehicleId: "test",
      }),
    ].filter((s) => s.getUserId() === id);
  }

  public async findByVehicleId(id: string): Promise<Service[]> {
    throw new Error("Method not implemented.");
  }

  public async listAll(): Promise<Service[]> {
    throw new Error("Method not implemented.");
  }

  public async update(service: Service): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
