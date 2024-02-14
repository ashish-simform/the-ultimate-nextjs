import React from "react";
import Link from "next/link";
import NavLink from "./ui/NavLink";
import ContactButton from "./ui/ContactButton";
import ThemeButton from "./ui/ThemeButton";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        listStyleType: "none",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/signin">SignIn</NavLink>
      </li>
      <li>
        <NavLink href="/signup">SignUp</NavLink>
      </li>
      <li>
        <NavLink href="/about">About</NavLink>
      </li>
      <li>
        <ContactButton />
      </li>
      <li>
        <NavLink href="/posts">Posts</NavLink>
      </li>
      <ThemeButton />
    </header>
  );
};

export default Header;
