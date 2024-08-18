import { CreateServiceController } from "@application/service/controller/create-service-controller";
import { DeleteServiceController } from "@application/service/controller/delete-service-controller";
import { ListServiceByIdController } from "@application/service/controller/list-service-by-id-controller";
import { ListServiceController } from "@application/service/controller/list-service-controller";
import { UpdateServiceController } from "@application/service/controller/update-service-controller";
import { verifyAuth } from "@infra/express/middlewares";
import { Router } from "express";

const serviceRoutes = Router();

serviceRoutes.use(verifyAuth);

serviceRoutes.post("/", CreateServiceController.handle);

serviceRoutes.get("/", ListServiceController.handle);

serviceRoutes.get("/:serviceId", ListServiceByIdController.handle);

serviceRoutes.put("/", UpdateServiceController.handle);

serviceRoutes.delete("/", DeleteServiceController.handle);

export { serviceRoutes };
