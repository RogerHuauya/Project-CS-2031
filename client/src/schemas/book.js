import { z } from "zod";

export const bookSchema = z.object({
  author: z.string({
    required_error: "Author is required",
  }),
  title: z.string({
    required_error: "Title is required",
  }),
  status: z.boolean({
    required_error: "Status is required",
    }),
});
