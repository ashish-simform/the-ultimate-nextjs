"use client";
import { useRouter } from "next/navigation";
// import React, { useState, useTransition } from "react";
import { addEntry } from "../_actions";
import { useRef, useState } from "react";

const GuestbookEntryForm = () => {
  //   const router = useRouter();
  //   const [isPending, startTransition] = useTransition();
  //   const [isFetching, setIsFetching] = useState(false);
  //   const isMutating = isFetching || isPending;

  //   const handleSubmit = async event => {
  //     event.preventDefault();
  //     const form = event.currentTarget;
  //     const formData = new FormData(form);
  //     const { name, message } = Object.fromEntries(formData);

  //     if (!name || !message) return;
  //     setIsFetching(true);
  //     const { error } = await fetch("/api/guestbook", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ name, message }),
  //     });

  //     form.reset();

  //     setIsFetching(false);
  //     startTransition(() => {
  //       router.refresh();
  //     });
  //   };

  const [validationError, setValidationError] = useState(null);

  const formRef = useRef();

  async function action(data) {
    // 'use server'
    //so here it we won't add use server directive as it is client cmp
    const result = await addEntry(data);

    if (result?.error) {
      setValidationError(result.error);
    } else {
      setValidationError(null);
      //reset the form
      formRef.current.reset();
    }
  }

  return (
    <form
      className="flex flex-col mt-5 text-sm w-96 sm gap-y-3"
      //   onSubmit={handleSubmit}
      key={Math.random()}
      ref={formRef}
      //   action={addEntry}
      //   if we use the this component as server cmp then we can use action directly
      action={action}
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
      {JSON.stringify(validationError)}
      <button
        type="submit"
        className="px-3 py-2 text-white bg-black rounded"
        // disabled={isMutating}
      >
        Add
      </button>
    </form>
  );
};

export default GuestbookEntryForm;
