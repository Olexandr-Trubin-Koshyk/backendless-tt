import { 
  Chart, 
  ChartType, 
  LineController, 
  LineElement, 
  BarElement, 
  PointElement, 
  LinearScale, 
  CategoryScale, 
  Title, 
  Tooltip, 
  Legend 
} from "chart.js";
import { Bar, Line} from "react-chartjs-2";
import React from "react";
import './ChartGraphics.css'

Chart.register(
  LineController, 
  LineElement, 
  BarElement, 
  PointElement, 
  LinearScale, 
  CategoryScale, 
  Tooltip, 
  Legend, 
  Title
);

interface Props {
  chartType: ChartType,
  months: string[],
  valuesByMonths: string[],
};

export const ChartGraphics: React.FC<Props> = React.memo(({chartType, months, valuesByMonths}) => {
  const config = {
    type: chartType,
    data: {
      labels: months,
      datasets: [
        {
          label: 'Dataset 1',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          data: valuesByMonths,
        }
      ]  
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      }
    },
  };

  const chart = () => {
    switch (chartType) {
      case ('bar'):
        return (
          <Bar data={config.data} options={config.options} width={300} height={100} />
        );
      case ('line'):
        return (
          <Line data={config.data} options={config.options} width={300} height={100} />
        );
      default:
        return;
    }
  }

  const preparedChart = chart();
  
  return (
    <div className="chart__graphic">
      {preparedChart}
    </div>
  )
})