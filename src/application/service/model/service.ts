import mongoose, { Schema } from "mongoose";
import { IService, ServiceContructorDTO } from "../dto";
import { Vehicle } from "@application/vehicle/model/vehicle";

const ServiceSchema = new Schema({
  description: { type: String, required: true },
  date: { type: Date, required: true },
  vehicleId: { type: String, required: true },
  userId: { type: String, required: true },
  status: { type: String, required: true },
  value: { type: Number, required: true },
});

export const ServiceModel = mongoose.model("Service", ServiceSchema);

export class Service {
  private id: string;
  private description: string;
  private date: Date;
  private vehicleId: string;
  private userId: string;
  private status: string;
  private value: number;
  private vehicle: Vehicle | null;

  private constructor(data: ServiceContructorDTO) {
    this.id = data.id;
    this.description = data.description;
    this.date = data.date;
    this.vehicleId = data.vehicleId;
    this.userId = data.userId;
    this.status = data.status;
    this.value = data.value;

    this.vehicle = null;
  }

  public static newService(data: ServiceContructorDTO): Service {
    return new Service(data);
  }

  public getDescription(): string {
    return this.description;
  }

  public getId(): string {
    return this.id;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getDate(): Date {
    return this.date;
  }

  public setDate(date: Date): void {
    this.date = date;
  }

  public getVehicleId(): string {
    return this.vehicleId;
  }

  public setVehicleId(vehicleId: string): void {
    this.vehicleId = vehicleId;
  }

  public getUserId(): string {
    return this.userId;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }

  public setVehicle(v: Vehicle): void {
    this.vehicle = v;
  }

  public getVehicle(): Vehicle | null {
    return this.vehicle;
  }
}

export interface IServiceRepository {
  create(data: IService): Promise<Service>;
  findById(id: string): Promise<Service | undefined>;
  findByUserId(id: string): Promise<Service[]>;
  findByVehicleId(id: string): Promise<Service[]>;
  listAll(): Promise<Service[]>;
  update(service: Service): Promise<void>;
  delete(id: string): Promise<void>;
}
