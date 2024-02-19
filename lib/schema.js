import { z } from "zod";

export const GuestEntrySchema = z.object({
  message: z.string().min(1, { message: "name is required" }),
  message: z.string().min(1, { message: "message is required" }),
});
