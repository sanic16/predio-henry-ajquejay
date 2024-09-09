"use server";
import * as z from "zod";

import { LoginSchema } from "@/schemas/login";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Por favor, revisa los campos",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return {
      success: "Inicio de sesión exitoso",
    };
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Credenciales inválidas",
          };
        default:
          return {
            error: "Error desconocido",
          };
      }
    }
    console.error(error);
    throw error;
  }
};
