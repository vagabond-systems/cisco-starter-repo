// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";


const LineChart = () => {
  const labels = [];
const dataPoints = [];

// Create labels and data points
const startTime = new Date("May 4, 2023 10:31:00");
const endTime = new Date("May 4, 2023 12:01:00");
const timeDiff = endTime.getTime() - startTime.getTime();
const diffInMinutes = Math.round(timeDiff / (1000 * 60));
for (let i = 0; i <= diffInMinutes; i += 5) {
  const time = new Date(startTime.getTime() + i * 60 * 1000);
  const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  labels.push(formattedTime);
  dataPoints.push(Math.floor(Math.random() * 501)); // Generate a random data point from 0 to 500
}

const data = {
  labels: labels,
  datasets: [
    {
      label: "Latency (ms)",
      fontColor: "rgb(105, 228, 255)",
      backgroundColor: "rgb(105, 228, 255)",
      borderColor: "rgb(105, 228, 255)",
      data: dataPoints
    },
  ],
  tension: 1.5,
};
  return (
    <div className="linechart">
      <Line data={data} />
    </div>
  );
};

export default LineChart;