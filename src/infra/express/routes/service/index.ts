import { CreateServiceController } from "@application/service/controller/create-service-controller";
import { DeleteServiceController } from "@application/service/controller/delete-service-controller";
import { ListServiceByIdController } from "@application/service/controller/list-service-by-id-controller";
import { ListServcieByUserIdController } from "@application/service/controller/list-service-by-user-id-controller";
import { ListServiceByVehicleIdController } from "@application/service/controller/list-service-by-vehicle-id-controller";
import { ListServiceController } from "@application/service/controller/list-service-controller";
import { UpdateServiceController } from "@application/service/controller/update-service-controller";
import { verifyAuth } from "@infra/express/middlewares";
import { Router } from "express";

const serviceRoutes = Router();

serviceRoutes.use(verifyAuth);

serviceRoutes.post("/", CreateServiceController.handle);

serviceRoutes.get("/", ListServiceController.handle);

serviceRoutes.get("/id/:serviceId", ListServiceByIdController.handle);

serviceRoutes.get("/user", ListServcieByUserIdController.handle);

serviceRoutes.get(
  "/vehicle/:vehicleId",
  ListServiceByVehicleIdController.handle
);

serviceRoutes.put("/", UpdateServiceController.handle);

serviceRoutes.delete("/:serviceId", DeleteServiceController.handle);

export { serviceRoutes };
