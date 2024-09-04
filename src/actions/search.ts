"use server";
import * as z from "zod";
import { CarFilterSearchSchema } from "@/schemas";

export const search = async (values: z.infer<typeof CarFilterSearchSchema>) => {
  const validateFilterFormFields = CarFilterSearchSchema.safeParse(values);

  if (!validateFilterFormFields.success) {
    return { error: "Datos incorrectos" };
  }
};
