export interface IService {
  description: string;
  date: Date;
  vehicleId: string;
  userId: string;
  status: string;
  value: number;
}

export interface ServiceContructorDTO extends IService {
  id: string;
}
