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

const LineChart: React.FC<Props> = () => {
  const options = {
    title: {
      text: `Linhas`,
      style: {
        fontSize: '18px',
        fontFamily: "'Inconsolata', monospace",
        color: 'var(--color-primary)'
      }
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
    ],
    xaxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul']
    },
    chart: {
      width: '100%',
      height: 250,
      zoom: {
        enabled: true
      },
      toolbar: {
        show: false,
        // offsetX: 10,
        // offsetY: 350
      }
    },
    colors: ['var(--color-primary)', 'var(--color-secundary)'],
    dataLabels: {
      enabled: false
    }
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
          <h5>Dashboard em Linhas com dados de vendas totais e individuais</h5>
        </TooltipBox>
      </TooltipCard>
      <ReactApexChart
        type="line"
        options={options}
        series={series}
        height={350}
        width={390}
      />
    </DashboardContainer>
  );
};

export default LineChart;
