import ReactApexChart, { Props } from 'react-apexcharts';
import React from 'react';
import {
  DashboardContainer,
  IconContainer,
  TooltipBox,
  TooltipCard,
  TooltipText
} from '../../style/CommunsStyle';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const PieChart: React.FC<Props> = () => {
  const options = {
    // title: {
    //   text: 'Pie',
    //   style: {
    //     fontSize: '18px',
    //     fontFamily: "'Inconsolata', monospace",
    //     color: 'var(--color-primary)'
    //   }
    // },
    colors: ['var(--color-primary)', 'var(--color-secundary)'],
    labels: ['Total de vendas', 'Minhas vendas'],
    options: {
      chart: {
        type: 'pie'
      }
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
