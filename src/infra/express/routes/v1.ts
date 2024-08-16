import { Router } from "express";
import { userRoutes } from "./user";

const v1Routes = Router();

v1Routes.use("/users", userRoutes);

export { v1Routes };
