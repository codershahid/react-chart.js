import React from "react";
import LineChart from "../atom/LineChart";

export const CardAOV = ({ aovList, aovTotal }) => {
  console.log("card", aovList);

  return (
    <main className="flex-1 shadow-md mt-8 border border-gray-300">
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
