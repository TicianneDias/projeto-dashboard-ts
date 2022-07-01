import ReactApexChart, { Props } from "react-apexcharts";
import React from "react";
import { DashboardContainer, IconContainer, TooltipBox, TooltipCard, TooltipText } from "../../style/CommunsStyle";
import { IoMdInformationCircleOutline } from "react-icons/io";


const BarChart: React.FC<Props> = () => {
  
    const options = {
        title: {
            text: 'Pie',
            style:{
                fontSize: '18px', 
                fontFamily: "'Inconsolata', monospace",
                color: 'var(--color-primary)'
            }
        },
        colors: ['var(--color-primary)', 'var(--color-secundary)'],
        labels: ['Total de vendas', 'Minhas vendas'],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
    };
  
    const series = [401, 257]
  
    return (
      <DashboardContainer>
      <TooltipCard>
          <TooltipText>
            <IconContainer>
              <IoMdInformationCircleOutline id="icon"/>
            </IconContainer>
          </TooltipText>
          <TooltipBox>
            <h5>Dashboard em Pie com porcentagens de vendas totais e individuais</h5>
          </TooltipBox>
        </TooltipCard>
        <ReactApexChart
          type="pie"
          options={options}
          series={series}
          height={350}
          width={550}
        />
        
      </DashboardContainer>
    );
  };

  export default BarChart