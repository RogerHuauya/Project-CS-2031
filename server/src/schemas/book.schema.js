import { z } from "zod";

export const createBookSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  author: z.string({
    required_error: "Author is required",
    }),
});