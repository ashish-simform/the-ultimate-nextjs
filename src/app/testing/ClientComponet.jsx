"use client";
import React, { useEffect } from "react";

const ClientComponet = () => {
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return <div>ClientComponet</div>;
};

export default ClientComponet;
