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
