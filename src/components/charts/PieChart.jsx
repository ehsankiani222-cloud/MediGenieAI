import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function PieChart() {
  const data = {
    labels: [
      "Paid",
      "Pending",
      "Denied",
    ],
    datasets: [
      {
        label: "Claims",
        data: [60, 30, 10],
        backgroundColor: [
          "#2ecc71",
          "#f39c12",
          "#e74c3c",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "30px",
      }}
    >
      <Pie data={data} />
    </div>
  );
}

export default PieChart;