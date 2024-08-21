import { AuthenticateController } from "@application/user/controller/authenticate-controller";
import { CreateUserController } from "@application/user/controller/create-user-controller";
import {
  AuthenticateValidator,
  CreateUserValidator,
} from "@application/user/validator";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/", CreateUserValidator, CreateUserController.handle);

userRoutes.post("/auth", AuthenticateValidator, AuthenticateController.handle);

export { userRoutes };
