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

const RadarChart: React.FC<Props> = () => {
  const options = {
    title: {
      text: 'Radar',
      style: {
        fontSize: '18px',
        fontFamily: "'Inconsolata', monospace",
        color: 'var(--color-primary)'
      }
    },
    colors: ['var(--color-primary)', 'var(--color-secundary)'],
    fill: {
      colors: ["#9f040c6f", "#10244f7a"],
    },
    chart: {
      width: '100%',
      dropShadow: {
        enabled: true,
        blur: 4,
        left: 7,
        top: 7
      },
    },
    markers: {
      size: 0.7
    },
    xaxis: {
      categories: ['Jan','Fev','Mar','Abr','Mai','Jun', 'Jul']
    },
    responsive: [{
      breakpoint: 612,
      options: {
        chart: {
          width: '100%',

        }
      }
    }],
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
    <DashboardContainer>
      <TooltipCard>
        <TooltipText>
          <IconContainer>
            <IoMdInformationCircleOutline id="icon" />
          </IconContainer>
        </TooltipText>
        <TooltipBox>
          <h5>Dashboard em Radar com dados de vendas totais e individuais</h5>
        </TooltipBox>
      </TooltipCard>
      <ReactApexChart
        type="radar"
        options={options}
        series={series}
        height={350}
        width={550}
      />
    </DashboardContainer>
  );
};

export default RadarChart;