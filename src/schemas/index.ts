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
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
});
