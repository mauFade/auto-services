import { CreateVehicleController } from "@application/vehicle/controller/create-vehicle-controller";
import { CreateVehicleValidator } from "@application/vehicle/validator";
import { verifyAuth } from "@infra/express/middlewares";
import { Router } from "express";

const vehicleRoutes = Router();

vehicleRoutes.post(
  "/",
  verifyAuth,
  CreateVehicleValidator,
  CreateVehicleController.handle
);

export { vehicleRoutes };
