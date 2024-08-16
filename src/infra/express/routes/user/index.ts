import { AuthenticateController } from "@application/user/controller/authenticate-controller";
import { CreateUserController } from "@application/user/controller/create-user-controller";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/", CreateUserController.handle);

userRoutes.post("/auth", AuthenticateController.handle);

export { userRoutes };
