import React from "react";
import BarChart from "../atom/BarChart";

export const CardRevenue = ({ revList, revTotal }) => {
  const direct = revList?.map((i) => i?.direct);
  const indirect = revList?.map((i) => i?.indirect);
  const month = revList?.map((i) => i?.month);

  let directTotal = revTotal?.direct.toFixed(2);
  let indirectTotal = revTotal?.indirect.toFixed(2);

  return (
    <main className="flex-1 shadow-md mt-8 border border-red-500">
      <div className="my-1">
        <h3 className="text-base p-4 border-b border-gray-100 font-bold capitalize">
          Direct VS Indirect
        </h3>
        <div className="flex space-x-4 p-4">
          <div className="flex items-center">
            <div className="w-4 h-4 border-4 border-purple rounded-xl "></div>
            <h1 className="ml-2 text-30-40">{directTotal}</h1>
            <span className="ml-4 capitalize">Direct</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 border-4 border-blue rounded-xl "></div>
            <h1 className="ml-2 text-30-40">{indirectTotal}</h1>
            <span className="ml-4 capitalize">indirect</span>
          </div>
        </div>
      </div>
      <div className="border">
        <BarChart obj={{ direct: direct, indirect: indirect, month: month }} />
      </div>
    </main>
  );
};
