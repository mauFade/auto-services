import { CreateServiceController } from "@application/service/controller/create-service-controller";
import { DeleteServiceController } from "@application/service/controller/delete-service-controller";
import { UpdateServiceController } from "@application/service/controller/update-service-controller";
import { verifyAuth } from "@infra/express/middlewares";
import { Router } from "express";

const serviceRoutes = Router();

serviceRoutes.post("/", verifyAuth, CreateServiceController.handle);

serviceRoutes.put("/", verifyAuth, UpdateServiceController.handle);

serviceRoutes.delete("/", verifyAuth, DeleteServiceController.handle);

export { serviceRoutes };
