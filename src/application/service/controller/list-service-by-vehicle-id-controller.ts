import { Request, Response } from "express";
import { listServiceByVehicleIdFactory } from "../factory/list-service-by-vehicle-id-use-case";

export class ListServiceByVehicleIdController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { vehicleId } = request.params;

    const useCase = listServiceByVehicleIdFactory();

    const data = await useCase.execute({ vehicleId });

    return response.status(200).json(data);
  }
}
