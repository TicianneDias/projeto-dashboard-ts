import ReactApexChart, { Props } from 'react-apexcharts';
import React from 'react';

const RadarChart: React.FC<Props> = () => {
  const options = {
    colors: ['var(--color-primary)', 'var(--color-secundary)'],
    fill: {
      colors: ['#9f040c6f', '#10244f7a']
    },
    chart: {
      width: '100%',
      dropShadow: {
        enabled: true,
        blur: 4,
        left: 7,
        top: 7
      },
      toolbar: {
        show: false
      },
    },
    markers: {
      size: 0.7
    },
    xaxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul']
    },
    responsive: [
      {
        breakpoint: 612,
        options: {
          chart: {
            width: '100%'
          }
        }
      }
    ]
  };

  const series = [
    {
      name: 'Total de vendas',
      data: [31, 40, 58, 51, 42, 79, 100]
    },
    {
      name: 'Minhas vendas',
      data: [11, 32, 45, 32, 34, 32, 41]
    }
  ];

  return (
    <ReactApexChart
      type="radar"
      options={options}
      series={series}
      height={350}
      width={550}
    />
  );
};

export default RadarChart;
