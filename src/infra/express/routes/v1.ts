import { Router } from "express";
import { userRoutes } from "./user";
import { serviceRoutes } from "./service";
import { vehicleRoutes } from "./vehicle";

const v1Routes = Router();

v1Routes.use("/users", userRoutes);
v1Routes.use("/services", serviceRoutes);
v1Routes.use("/vehicles", vehicleRoutes);

export { v1Routes };
