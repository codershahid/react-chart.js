import React, { useEffect, useState } from "react";
import { apiCall } from "../../network/apiCalls";
import { ROUTES } from "../../network/url";
import { CardSales } from "../molecule/CardSales";
import { CardRevenue } from "../molecule/CardRevenue";
import { CardAOV } from "../molecule/CardAOV";

export const CardContainer = () => {
  const [salesData, setSalesData] = useState([]);
  const [revData, setRevData] = useState([]);
  const [aovData, setAovData] = useState([]);
  const convertObjToArray = (data) => {
    let arr = [];
    for (let i in data.data) {
      let obj = {};
      obj[i] = data.data[i];
      arr.push(obj);
    }
    setSalesData(arr);
  };
  const fetchApi = async () => {
    const apiRes = await apiCall(ROUTES.SALES);
    convertObjToArray(apiRes);
    const apiResRev = await apiCall(ROUTES.REVENUE);
    setRevData(apiResRev);
    const apiAovRes = await apiCall(ROUTES.ORDER_SALES);
    setAovData(apiAovRes);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  // console.log(aovData.data?.values);
  return (
    <div className="">
      <div className="flex space-x-4">
        {salesData.map((card, index) => {
          const val = Object.values(salesData[index]);
          return val.map((i, ind) => {
            return <CardSales title={i.title} prop={i} key={ind} />;
          });
        })}
      </div>
      <div className="flex space-x-4">
        <CardRevenue
          revList={revData.data?.revenue}
          revTotal={revData.data?.totalRevenue}
        />
        <CardAOV
          aovList={aovData.data?.values}
          aovTotal={aovData.data?.total}
        />
      </div>
    </div>
  );
};
