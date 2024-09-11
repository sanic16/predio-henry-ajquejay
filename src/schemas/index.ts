import * as z from "zod";

export const CarFilterSearchSchema = z.object({
  make: z.string().optional(),
  year: z.string().optional(),
  transmission: z.string().optional(),
  price: z
    .number()
    .min(0, {
      message: "Price must be at least 0.",
    })
    .max(500000, {
      message: "Price must be at most 100.",
    })
    .default(0),
});

export const CarContactSchema = z.object({
  name: z
    .string({
      message: "Nombre requerido.",
    })
    .min(3, {
      message: "Nombre debe tener al menos 3 caracteres.",
    })
    .max(50, {
      message: "Nombre debe tener a lo más 50 caracteres.",
    }),
  email: z
    .string({
      message: "Correo electrónico requerido.",
    })
    .email({ message: "Correo electrónico inválido." }),
  phone: z
    .string({
      message: "Número de teléfono requerido.",
    })
    .min(8, {
      message: "Número de teléfono debe tener al menos 8 caracteres.",
    })
    .max(8, {
      message: "Número de teléfono debe tener a lo más 8 caracteres.",
    }),
  message: z
    .string({
      message: "Mensaje requerido.",
    })
    .min(10, {
      message: "Mensaje debe tener al menos 10 caracteres.",
    }),
});
