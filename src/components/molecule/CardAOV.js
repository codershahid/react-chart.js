import React, { useEffect } from "react";
import LineChart from "../atom/LineChart";

export const CardAOV = ({ aovList, aovTotal }) => {
  console.log("card", aovList);
  const aovList1 = [
    3.56, 7.43, 6.43, 6.53, 5.67, 8.09, 7.43, 8.45, 9.34, 7.45, 6.54, 6.66,
    4.32, 4.56, 8.76,
  ];

  return (
    <main className="flex-1 shadow-md mt-8 border border-red-500">
      <div className="my-1">
        <h3 className="text-base p-4 border-b border-gray-100 font-bold capitalize">
          Average Order Value
        </h3>
        <h1 className="text-30-40 p-4">{aovTotal}</h1>
      </div>

      <div className="border">
        <LineChart previous={[]} current={aovList} />
      </div>
    </main>
  );
};
