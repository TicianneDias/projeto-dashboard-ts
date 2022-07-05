import ReactApexChart, { Props } from 'react-apexcharts';
import React from 'react';

const PieChart: React.FC<Props> = () => {
  const options = {
    colors: ['var(--color-primary)', 'var(--color-secundary)'],
    labels: ['Total de vendas', 'Minhas vendas'],
    options: {
      chart: {
        type: 'pie'
      }
    },
    stroke: {
      show: false
    },
    legend: {
      position: 'bottom'
    },
    responsive: [
      {
        breakpoint: 612,
        options: {
          labels: ['Total de vendas', 'Minhas vendas'],
          chart: {
            width: '100%'
          }
        }
      }
    ]
  };

  const series = [401, 257];

  return (
    <ReactApexChart
      type="pie"
      options={options}
      series={series}
      height={350}
      width={550}
    />
  );
};

export default PieChart;
