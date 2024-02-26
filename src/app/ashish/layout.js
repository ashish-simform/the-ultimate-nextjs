import React from "react";
import NavLink from "../components/ui/NavLink";

const Layout = ({ children, one, two }) => {
  return (
    <>
      <div>
        <NavLink href={"/ashish/1home"}>one 1home</NavLink>
        <hr />
        <NavLink href={"/ashish/2home"}>two 2home</NavLink>
      </div>
      <div>
        <h1>Content form the props</h1>
        {children}
        {one}
        {two}
      </div>
    </>
  );
};

export default Layout;
