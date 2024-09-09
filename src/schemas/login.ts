import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "El campo de correo electrónico es requerido",
      message: "El campo de correo electrónico es requerido",
    })
    .email({
      message: "El correo electrónico no es válido",
    }),
  password: z.string({
    invalid_type_error: "El campo de contraseña es requerido",
    message: "El campo de contraseña es requerido",
  }),
});

export const RegisterSchema = z.object({
  email: z
    .string({
      message: "El campo de correo electrónico es requerido",
    })
    .email({
      message: "El correo electrónico no es válido",
    }),
  password: z
    .string({
      message: "El campo de contraseña es requerido",
    })
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",
    }),
  name: z
    .string({
      message: "El campo de nombre es requerido",
    })
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres",
    }),
});
