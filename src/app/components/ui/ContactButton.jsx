"use client";
import { useRouter } from "next/navigation";
import React from "react";

//useRouter => next/navigation => to use in app router
//useRouter => next/router => to use in page router
const ContactButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };
  return <button onClick={handleClick}>Contact</button>;
};

export default ContactButton;
