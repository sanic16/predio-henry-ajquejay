import * as z from "zod";

export const CarSchema = z.object({
  title: z.string({
    invalid_type_error: "El título es requerido",
    message: "El título es requerido",
  }),
  modelYear: z.number({
    invalid_type_error: "El año del modelo es requerido",
    message: "El año del modelo es requerido",
  }),
  modelMake: z.string({
    invalid_type_error: "La marca del modelo es requerida",
    message: "La marca del modelo es requerida",
  }),
  price: z.number({
    invalid_type_error: "El precio es requerido",
    message: "El precio es requerido",
  }),
  condition: z
    .enum(["NEW", "USED"], {
      invalid_type_error: "La condición es requerida",
      message: "La condición es requerida",
    })
    .default("USED"),
  transmission: z
    .enum(["AUTO", "MANUAL"], {
      invalid_type_error: "La transmisión es requerida",
      message: "La transmisión es requerida",
    })
    .default("AUTO"),
  mileage: z.number({
    invalid_type_error: "El kilometraje es requerido",
    message: "El kilometraje es requerido",
  }),
  engineType: z
    .enum(["PETROL", "DIESEL", "ELECTRIC", "HYBRID"], {
      invalid_type_error: "El tipo de motor es requerido",
      message: "El tipo de motor es requerido",
    })
    .default("PETROL"),
  engineCapacity: z.number({
    invalid_type_error: "La capacidad del motor es requerida",
    message: "La capacidad del motor es requerida",
  }),
  color: z.string().optional(),
  doors: z.number().optional(),
  warranty: z.boolean().default(false),
  lastServiced: z.string().optional(),
  location: z.string().optional(),
  description: z.string().optional(),
});
