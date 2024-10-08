import { IVehicle } from "../../../src/application/vehicle/dto";
import {
  IVehicleRepository,
  Vehicle,
} from "../../../src/application/vehicle/model/vehicle";

export class VehicleRepositoryMock implements IVehicleRepository {
  private vehicles: Vehicle[] = [];

  public async create(data: IVehicle): Promise<Vehicle> {
    const v = Vehicle.newVehicle({
      id: "123",
      name: data.name,
      userId: data.userId,
    });

    this.vehicles.push(v);

    return v;
  }

  public async findById(id: string): Promise<Vehicle | undefined> {
    const vehicles: Vehicle[] = [
      Vehicle.newVehicle({ id: "123", name: "test", userId: "test" }),
    ];

    return vehicles.find((v) => v.getId() === id);
  }
}
