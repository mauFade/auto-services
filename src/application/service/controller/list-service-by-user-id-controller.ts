import { Request, Response } from "express";
import { listServiceByUserIdFactory } from "../factory/list-service-by-user-id-factory";

export class ListServcieByUserIdController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const useCase = listServiceByUserIdFactory();

    const data = await useCase.execute({ userId: id });

    return response.status(200).json(data);
  }
}
