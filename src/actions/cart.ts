"use server";

import * as z from "zod";

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { CarSchema } from "@/schemas/car";

export const createCarAction = async (data: z.infer<typeof CarSchema>) => {
  const validatedData = CarSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      error: "Por favor, revisa los campos del formulario",
    };
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      error: "No tienes permisos para realizar esta acción",
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  if (!user) {
    return {
      error: "No tienes permisos para realizar esta acción",
    };
  }

  try {
    await prisma.car.create({
      data: {
        ...validatedData.data,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Ha ocurrido un error al crear el carro",
    };
  }

  console.log("Creating car with data", validatedData.data);
};
