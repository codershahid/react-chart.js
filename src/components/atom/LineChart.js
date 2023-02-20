import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = ({ previous, current }) => {
  const labels = [];
  current?.map(() => {
    labels.push("");
    return null;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "LW",
        backgroundColor: "rgba(59, 130, 246, 0.08)",
        borderColor: "rgba(203, 213, 225, 1)",
        data: previous,
        pointStyle: false,
        borderWidth: 1,
      },
      {
        label: "CW",
        backgroundColor: "rgba(203, 213, 225, 0.7)",
        borderColor: "rgba(99, 102, 241, 1)",
        data: current,
        fill: true,
        pointStyle: false,
        borderWidth: 1,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
