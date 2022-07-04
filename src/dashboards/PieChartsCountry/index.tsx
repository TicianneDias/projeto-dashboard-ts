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

const PieChartCountry: React.FC<Props> = () => {
  const options = {
    title: {
        text: `Locais vendidos`,
        style: {
          fontSize: '18px',
          fontFamily: "'Inconsolata', monospace",
          color: 'var(--color-primary)'
        }
      },
    colors: ['var(--color-primary)', 'var(--color-secundary-light)', 'var(--color-green)'],
    labels: ['Portugal', 'EUA', 'Brasil'],
    options: {
      chart: {
        type: 'pie'
      }
    },
    responsive: [
      {
        breakpoint: 612,
        options: {
            labels: ['Portugal', 'EUA', 'Brasil'],
          chart: {
            width: '100%'
          }
        }
      }
    ]
  };

  const series = [98,107,52];

  return (
    <DashboardContainer>
      <TooltipCard>
        <TooltipText>
          <IconContainer>
            <IoMdInformationCircleOutline id="icon" style={{marginLeft:'180px'}} />
          </IconContainer>
        </TooltipText>
        <TooltipBox style={{marginLeft:'150px'}}>
          <h5>Localização das vendas de imóveis por países vendidos</h5>
        </TooltipBox>
      </TooltipCard>
    <ReactApexChart
      type="pie"
      options={options}
      series={series}
      height={350}
      width={390}
    />
    </DashboardContainer>
  );
};

export default PieChartCountry;