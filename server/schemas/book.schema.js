import { z } from "zod";

export const createBookSchema = z.object({
    author: z.string({
      required_error: "Author is required",
    }),
    title : z.string({
        required_error: "Title is required",
    }),
    status: z.boolean().optional(),
    date: z.string().datetime().optional(),
  });
  