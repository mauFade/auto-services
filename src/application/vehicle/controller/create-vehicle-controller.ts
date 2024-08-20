import { Request, Response } from "express";
import { createVehicleFactory } from "../factory/create-vehicle-factory";

export class CreateVehicleController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const { id } = request.user;

    const useCase = createVehicleFactory();

    const data = await useCase.execute({
      userId: id,
      name,
    });

    return response.status(201).json(data);
  }
}
