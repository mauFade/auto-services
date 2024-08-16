import { Router } from "express";
import { userRoutes } from "./user";
import { serviceRoutes } from "./service";

const v1Routes = Router();

v1Routes.use("/users", userRoutes);
v1Routes.use("/services", serviceRoutes);

export { v1Routes };
