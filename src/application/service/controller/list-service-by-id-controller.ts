import { Request, Response } from "express";
import { listServiceByIdFactory } from "../factory/list-service-by-id-factory";

export class ListServiceByIdController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { serviceId } = request.params;

    const useCase = listServiceByIdFactory();

    const data = await useCase.execute({ serviceId });

    return response.status(200).json(data);
  }
}
