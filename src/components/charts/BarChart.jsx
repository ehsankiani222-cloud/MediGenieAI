import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const data = {
    labels: [
      "Patients",
      "Claims",
      "Payments",
      "Reports",
    ],
    datasets: [
      {
        label: "MediGenie AI",
        data: [125, 48, 35, 20],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "30px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;