import React from "react";

export const SidebarButton = ({ icon, name, isActive }) => {
  const activeClass = isActive ? "bg-[#0F172A]" : "";

  return (
    <div
      className={`flex items-center px-4 space-x-3 w-[208px] h-[40px] text-white ${activeClass}`}
    >
      <img src={icon} alt="ll" />
      <span>{name}</span>
    </div>
  );
};
