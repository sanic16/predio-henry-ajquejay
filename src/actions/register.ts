"use server";

import * as z from "zod";

import { RegisterSchema } from "@/schemas/login";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { getUserByEmail } from "@/queries/auth";

export const registerAction = async (
  values: z.infer<typeof RegisterSchema>
) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Por favor, revisa los campos",
    };
  }

  const { email, password, name } = validatedFields.data;
  // const hashedPassword = await bcrypt.hash(password, 10);

  // console.log("hashedPassword", hashedPassword);
  console.log("email", email);
  console.log("name", name);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "El correo ya está registrado",
    };
  }

  try {
    await prisma.user.create({
      data: {
        email,
        name,
        // password: hashedPassword,
        password,
      },
    });
  } catch (error) {}

  // TODO: Send token verification email

  return {
    success: "Registro exitoso",
  };
};
