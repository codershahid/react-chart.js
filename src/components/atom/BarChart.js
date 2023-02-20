// components/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  // console.log(props.obj.direct);
  const data = {
    labels: props.obj?.month,
    // isResponsive: true,
    datasets: [
      {
        label: "Direct",
        backgroundColor: "rgba(59, 130, 246, 0.08)",
        borderColor: "rgba(203, 213, 225, 1)",
        data: props.obj?.direct,
        pointStyle: false,
        borderWidth: 0,
        barThickness: 16,
        backgroundColor: "#38BDF8",
      },
      {
        label: "Indirect",
        backgroundColor: "rgba(203, 213, 225, 0.7)",
        borderColor: "rgba(99, 102, 241, 1)",
        data: props.obj?.indirect,
        fill: true,
        pointStyle: false,
        borderWidth: 0,
        barThickness: 16,
        backgroundColor: "#6366F1",
      },
    ],
  };

  return (
    <>
      <Bar data={data} />
      {/* isResponsive={true} */}
    </>
  );
};

export default BarChart;
