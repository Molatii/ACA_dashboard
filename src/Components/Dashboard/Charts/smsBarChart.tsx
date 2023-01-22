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
  Legend,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      min: 0,
      max: 50,
      grid: {
        display: false,
        color: "rgba(217,143,7,0.1)",
      },
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

export const data = {
  labels,
  datasets: [
    {
      data: [15, 20, 30, 19, 25, 24, 48, 40, 45],
      backgroundColor: "#1A202C",
      hoverBackgroundColor: "#FF7A00",
      borderRadius: 9,
      borderWidth: 0,
      borderSkipped: false,
      barThickness: 8,
    },
  ],
};

function SMSBarChart() {
  return <Bar options={options} data={data} height={171} />;
}
export default SMSBarChart;
