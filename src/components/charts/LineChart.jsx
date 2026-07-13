import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function LineChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [
          500,
          900,
          1200,
          1000,
          1600,
          2100,
        ],
        borderColor: "#3498db",
        backgroundColor: "#3498db",
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
      <Line data={data} />
    </div>
  );
}

export default LineChart;