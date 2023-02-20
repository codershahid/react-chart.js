import React from "react";
import { CardContainer } from "./CardContainer";
import { Topbar } from "./Topbar";

export const Mainbar = () => {
  return (
    <div className="flex-1">
      <Topbar />
      <div className="mx-auto">
        <CardContainer />
      </div>
    </div>
  );
};
