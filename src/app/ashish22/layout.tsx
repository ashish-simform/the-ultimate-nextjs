import React from "react";
import Link from "next/link";
import NavLink from "../components/ui/NavLink";
export default function RootLayout({
  children,
  one,
  two,
}: Readonly<{
  children: React.ReactNode;
  one: React.ReactNode;
  two: React.ReactNode;
}>) {
  return (
    <>
      <div style={{ display: "flex", gap: 20, margin: "1rem" }}>
        <NavLink href="/ashish22/1home">1Home</NavLink>
        <NavLink href="/ashish22/1contact">1contact</NavLink>
        <NavLink href="/ashish22/2home">2Home</NavLink>
        <NavLink href="/ashish22/2contact">2contact</NavLink>
      </div>
      <div>LAyout ashish</div>
      {one}
      {two}
      {children}
      {/* </Providers> */}
    </>
  );
}
