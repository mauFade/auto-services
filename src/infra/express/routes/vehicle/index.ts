import { CreateVehicleController } from "@application/vehicle/controller/create-vehicle-controller";
import { verifyAuth } from "@infra/express/middlewares";
import { Router } from "express";

const vehicleRoutes = Router();

vehicleRoutes.post("/", verifyAuth, CreateVehicleController.handle);

export { vehicleRoutes };
