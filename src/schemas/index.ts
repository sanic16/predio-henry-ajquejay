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
  name: z.string({
    message: "Nombre requerido.",
  }),
  email: z
    .string({
      message: "Correo electrónico requerido.",
    })
    .email({ message: "Correo electrónico inválido." }),
  phone: z.string({
    message: "Número de teléfono requerido.",
  }),
  message: z.string({
    message: "Mensaje requerido.",
  }),
});
