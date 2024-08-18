import { Request, Response } from "express";
import { deleteServiceFactory } from "../factory/delete-service-factory";

export class DeleteServiceController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { serviceId } = request.params;

    const useCase = deleteServiceFactory();

    await useCase.execute({
      id: serviceId,
    });

    return response.status(204).json();
  }
}
