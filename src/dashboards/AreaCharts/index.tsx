import ReactApexChart, { Props } from 'react-apexcharts';
import React from 'react';
import { TooltipCard, TooltipText } from '../../style/CommunsStyle';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import {
  BigDashboardContainer,
  IconBigContainer,
  TooltipBoxBigDashboard
} from './style';

const AreaCharts: React.FC<Props> = () => {
  const options = {
    title: {
      text: 'Áreas',
      style: {
        fontSize: '18px',
        fontFamily: "'Inconsolata', monospace",
        color: 'var(--color-primary)'
      }
    },
    colors: ['var(--color-primary)', 'var(--color-secundary)'],
    chart: {
      toolbar: {
        show: false
      },
      width: 1150,
      height: 450,
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ['var(--color-primary)', 'var(--color-secundary-light)']
      }
    },
    xaxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul']
    },
    responsive: [
      {
        breakpoint: 1285,
        options: {
          chart: {
            width: 800,
            height: 450
          }
        }
      },
      {
        breakpoint: 830,
        options: {
          chart: {
            width: 600,
            height: 450
          }
        }
      },
      {
        breakpoint: 630,
        options: {
          chart: {
            width: 500,
            height: 450
          }
        }
      },
      {
        breakpoint: 534,
        options: {
          chart: {
            width: 350,
            height: 450
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
    <BigDashboardContainer>
      <TooltipCard>
        <TooltipText>
          <IconBigContainer>
            <IoMdInformationCircleOutline id="iconBigDash" />
          </IconBigContainer>
        </TooltipText>
        <TooltipBoxBigDashboard>
          <h5>Dashboard em Áreas com dados de vendas totais e individuais</h5>
        </TooltipBoxBigDashboard>
      </TooltipCard>
      <ReactApexChart
        type="area"
        options={options}
        series={series}
        width={1150}
        height={450}
      />
    </BigDashboardContainer>
  );
};

export default AreaCharts;
