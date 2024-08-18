import { Request, Response } from "express";
import { listServiceFactory } from "../factory/list-service-factory";

export class ListServiceController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const useCase = listServiceFactory();

    const data = await useCase.execute();

    return response.status(200).json(data);
  }
}
