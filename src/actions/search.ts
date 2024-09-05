"use server";
import * as z from "zod";
import { CarFilterSearchSchema } from "@/schemas";
import prisma from "@/lib/prisma";

export const search = async (values: z.infer<typeof CarFilterSearchSchema>) => {
  const filters: any = {
    price: {
      lte: values.price,
    },
  };

  if (values.make && values.make !== "all") {
    filters.modelMake = values.make;
  }

  if (values.year && values.year !== "all") {
    filters.modelYear = parseInt(values.year);
  }

  if (values.transmission && values.transmission !== "all") {
    filters.transmission = values.transmission === "AUTO" ? "AUTO" : "MANUAL";
  }

  return await prisma.car.findMany({
    where: filters,
  });
};
