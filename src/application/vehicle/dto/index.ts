export interface IVehicle {
  userId: string;
  name: string;
}

export interface VehicleConstructorDTO extends IVehicle {
  id: string;
}
