import React from "react";
import Navbar from "./COMPONENTS/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <main className="max-w-[400px] md:max-w-[1540px]">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
