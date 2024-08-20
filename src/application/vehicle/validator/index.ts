import { celebrate, Joi, Segments } from "celebrate";

export const CreateVehicleValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
  }),
});
