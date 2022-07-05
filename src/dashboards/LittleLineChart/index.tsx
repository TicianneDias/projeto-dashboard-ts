import ReactApexChart, { Props } from 'react-apexcharts';
import React from 'react';

const LittleLineChart: React.FC<Props> = () => {
  const options = {
    toolbar: {
      show: false
    },
    chart: {
      height: 50,
      sparkline: {
        enabled: true
      }
    },
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    colors: ['var(--color-secundary-light)'],
    dataLabels: {
      enabled: false
    }
  };

  const series = [
    {
      name: 'Minhas vendas',
      data: [11, 32, 45, 32, 34, 32, 41]
    }
  ];

  return (
    <ReactApexChart
      type="line"
      options={options}
      series={series}
      width={100}
      height={80}
    />
  );
};

export default LittleLineChart;
