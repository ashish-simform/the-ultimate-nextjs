"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, ...rest }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link href={href} {...rest} className={isActive ? "text-cyan-500" : ""} />
  );
};

export default NavLink;
