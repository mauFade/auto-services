import { celebrate, Joi, Segments } from "celebrate";

export const CreateServiceValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    description: Joi.string().required(),
    date: Joi.date().required(),
    vehicleId: Joi.string().required(),
    status: Joi.string().required(),
    value: Joi.number().required(),
  }),
});

export const DeleteServiceValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    serviceId: Joi.string().required(),
  }),
});

export const ListServiceByIdValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    serviceId: Joi.string().required(),
  }),
});

export const ListServiceByVehicleIdValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    vehicleId: Joi.string().required(),
  }),
});

export const UpdateServiceValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    serviceId: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.date().required(),
    vehicleId: Joi.string().required(),
    userId: Joi.string().required(),
    status: Joi.string().required(),
    value: Joi.number().required(),
  }),
});
