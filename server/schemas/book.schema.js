import { z } from "zod";

export const createBookSchema = z.object({
    author: z.string({
      required_error: "Title is required",
    }),
    tile : z.string({
        required_error: "Title is required",
    }),
    status: z.string().optional(),
    date: z.string().datetime().optional(),
  });
