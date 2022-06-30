import ReactApexChart, { Props } from "react-apexcharts";
import React from "react";


const BarChart: React.FC<Props> = () => {
    const options = {
        title: {
            text: 'Barras',
            style:{
                fontSize: '18px'
            }
        },
      chart: {
        height: 250,
        zoom: {
          enabled: true,
        }
      }
    };
  
    const series = [
      {
        name: "Total de vendas",
        data: [31, 40, 58, 51, 42, 79, 100]
      },
      {
        name: "Minhas vendas",
        data: [11, 32, 45, 32, 34, 32, 41]
      }
    ];
  
    return (
        <ReactApexChart
          type="bar"
          options={options}
          series={series}
          height={350}
          width={450}
        />
    );
  };

  export default BarChart