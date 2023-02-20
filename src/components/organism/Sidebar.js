import React from "react";
import Logo from "../../images/Logo.svg";
import DashIcon from "../../images/DashIcon.svg";
import CustIcon from "../../images/CustIcon.svg";
import { SidebarButton } from "../atom/SidebarButton";

export const Sidebar = () => {
  const buttons = [
    { id: "001", icon: DashIcon, name: "Dashboard", status: true },
    { id: "002", icon: CustIcon, name: "Customers", status: false },
  ];
  return (
    <div className="w-[240px] p-4 bg-[#1E293B]">
      <img src={Logo} alt="ll" />
      <div className="text-white py-4 uppercase text-xs">Pages</div>
      <div className="">
        {buttons.map((btn) => {
          return (
            <SidebarButton
              key={btn.id}
              icon={btn.icon}
              name={btn.name}
              isActive={btn.status}
            />
          );
        })}
      </div>
    </div>
  );
};
