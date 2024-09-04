import * as z from "zod";

export const CarFilterSearchSchema = z.object({
  make: z.string().optional(),
  year: z.number().optional(),
  price: z.number().optional(),
  transmission: z.string().optional(),
});
