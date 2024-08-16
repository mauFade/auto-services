import { CreateUserController } from "@application/user/controller/create-user-controller";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/", CreateUserController.handle);

export { userRoutes };
