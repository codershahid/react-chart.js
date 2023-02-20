import React from "react";
import ArrowCustomer from "../../images/ArrowCustomer.svg";
import ArrowRetailer from "../../images/ArrowRetailer.svg";
import ArrowAccount from "../../images/ArrowAccount.svg";
import { BsThreeDots } from "react-icons/bs";
import LineChart from "../atom/LineChart";

export const CardSales = ({ title, prop }) => {
  let lastWeekTotal = 0;
  prop.lastWeek.map((item) => {
    lastWeekTotal += item;
  });
  const perHike =
    ((prop.currentWeekTotal - lastWeekTotal) / lastWeekTotal) * 100;

  let cardIcon;

  switch (title) {
    case "Customers":
      cardIcon = ArrowCustomer;
      break;
    case "Retailers":
      cardIcon = ArrowRetailer;
      break;
    case "Key Accounts":
      cardIcon = ArrowAccount;
      break;
    default:
      cardIcon = ArrowCustomer;
  }

  return (
    <main className="flex-1 max-w-card h-full shadow-md p-5 pb-0 my-1">
      <div className="flex items-center justify-between p-2">
        <img src={cardIcon} alt="arrrow" />
        <BsThreeDots className="" />
      </div>
      <div className="my-1">
        <h3 className="text-20-30">{title}</h3>
        <p className="text-gray-400 text-12-20">SALES</p>
        <div className="flex items-center">
          <h1 className="text-30-40">{prop.currentWeekTotal.toFixed(2)}</h1>
          {perHike <= 0 ? (
            <h3
              className={
                "bg-orange rounded-2xl flex items-center ml-4 px-2 h-min"
              }
            >
              {perHike.toFixed(0)}%
            </h3>
          ) : (
            <h3 className="bg-green rounded-2xl flex items-center text-white ml-4 px-2 h-min">
              +{perHike.toFixed(0)}%
            </h3>
          )}
        </div>
      </div>
      <LineChart previous={prop.lastWeek} current={prop.currentWeek} />
    </main>
  );
};
