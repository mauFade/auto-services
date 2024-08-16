import { Request, Response } from "express";
import { createServiceFactory } from "../factory/create-service-factory";

export class CreateServiceController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { description, date, vehicleId, status, value } = request.body;

    const { id } = request.user;

    const useCase = createServiceFactory();

    const data = await useCase.execute({
      description,
      date,
      vehicleId,
      userId: id,
      status,
      value,
    });

    return response.status(201).json(data);
  }
}
