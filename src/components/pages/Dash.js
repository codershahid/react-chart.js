import React from "react";
import { Sidebar } from "../organism/Sidebar";
import { Mainbar } from "../organism/Mainbar";

export const Dash = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Mainbar />
    </div>
  );
};
