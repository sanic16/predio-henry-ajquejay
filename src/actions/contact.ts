"use server";
import * as z from "zod";
import { CarContactSchema } from "@/schemas";

export const contactAction = async (values: any) => {
  const validatedFields = CarContactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Datos inválidos" };
  }

  return { success: "Contactado" };
};
