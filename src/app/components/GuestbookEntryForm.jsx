"use client";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";

const GuestbookEntryForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { name, message } = Object.fromEntries(formData);

    if (!name || !message) return;
    setIsFetching(true);
    const { error } = await fetch("/api/guestbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });

    form.reset();

    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <form
      className="flex flex-col mt-5 text-sm w-96 sm gap-y-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="px-3 py-3 bg-transparent border rounded"
      />
      <input
        type="text"
        name="message"
        placeholder="Your message..."
        className="px-3 py-3 bg-transparent border rounded"
      />
      <button
        type="submit"
        className="px-3 py-2 text-white bg-black rounded"
        disabled={isMutating}
      >
        Add
      </button>
    </form>
  );
};

export default GuestbookEntryForm;
