import { Request, Response } from "express";
import { createUserfactory } from "../factory/create-user-factory";

export class CreateUserController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const useCase = createUserfactory();

    const data = await useCase.execute({
      email,
      name,
      password,
    });

    return response.status(201).json(data);
  }
}
