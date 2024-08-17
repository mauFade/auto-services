import { Request, Response } from "express";
import { updateServiceFactory } from "../factory/update-service-factory";

export class UpdateServiceController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { serviceId, description, date, vehicleId, userId, status, value } =
      request.body;

    const useCase = updateServiceFactory();

    const data = await useCase.execute({
      id: serviceId,
      description,
      date,
      vehicleId,
      userId,
      status,
      value,
    });

    return response.status(200).json(data);
  }
}
