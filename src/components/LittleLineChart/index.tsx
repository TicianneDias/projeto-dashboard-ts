import ReactApexChart, { Props } from 'react-apexcharts';
import React from 'react';
import { SmallDashboardContainer } from '../../style/CommunsStyle';

const LittleLineChart: React.FC<Props> = () => {
  const options = {
    toolbar: false,
    chart: {
      height: 50,
      sparkline: {
        enabled: true
      }
    },
    colors: ['var(--color-primary)', 'var(--color-secundary)'],
    dataLabels: {
      enabled: false,
      style: {
        // colors: ['var(--color-gray-secundary)', 'var(--color-secundary-light)'],
      }
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
