import { Request, Response } from "express";
import { authenticateFactory } from "../factory/authenticate-factory";

export class AuthenticateController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const useCase = authenticateFactory();

    const data = await useCase.execute({
      email,
      password,
    });

    return response.status(200).json(data);
  }
}
