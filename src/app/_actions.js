"use server";

import { createGuestbookEntry } from "../../lib/mongo/guestbook";
import { revalidatePath } from "next/cache";
import { GuestEntrySchema } from "../../lib/schema";

export async function addEntry(data) {
  const { name, message } = Object.fromEntries(data);

  const { error: ZodError } = GuestEntrySchema.safeParse({ name, message });

  if (ZodError) {
    return { error: ZodError.format() };
  }

  const { insertedId, error } = await createGuestbookEntry({
    name,
    message,
  });

  revalidatePath("/guestbook");
}
