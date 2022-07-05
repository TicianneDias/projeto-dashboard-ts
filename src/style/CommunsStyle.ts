import styled from 'styled-components';
import { TooltipBoxBigDashboard } from '../dashboards/AreaCharts/style';
import { TooltipBoxMixedContainer } from '../dashboards/MixedContainer/style';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: auto;
    padding: 15px;
    
    margin: 25px auto;
    background-color: var(--color-white);
    box-shadow: 2px 2px 2px var(--color-gray-secundary);
    border-radius: 20px;

    @media(max-width: 1208px) {
        width: 550px;
    }
    @media(max-width: 1122px) {
        width: 540px;
        margin-bottom: 50px;
    }

    @media(max-width: 612px) {
        width: auto;
    }

    `;


export const IconContainer = styled.div`
    position: relative;
    z-index: 999;
    cursor: pointer;
    top: 29px;
    right: 100px;
    
    #icon {
        color: var(--color-secundary);
        font-size: 20px;
        &:hover {
            color: var(--color-blue);
        }
    }

    @media(max-width: 612px) {
        right: 70px;
    }

    
`;


export const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    @media(max-width: 1122px) {
        flex-direction: column;
        margin-bottom: 50px;
    }
`;

export const TooltipText = styled.div`
  cursor: pointer;
`;

export const TooltipBox = styled.div`
  position: absolute;
  top: -25px;
  left: -190px;
  visibility: hidden;
  width: 180px;
  padding: 5px;
  border-radius: 4px;
  transition: all 1ms ease-in-out;

  
  &:before {
      left: 40px;
      top: -10px;
      position: absolute;
  }

  @media(max-width: 612px) {
        left: -50px;
        top: -17px;
    }
`;


export const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox},  
  & ${TooltipText}:hover + ${TooltipBoxBigDashboard},
  & ${TooltipText}:hover + ${TooltipBoxMixedContainer}{
    visibility: visible;
    background-color: var(--color-white);
    border: 1px solid var(--color-primary);
    z-index: 1;
    h5 {
        color: var(--color-secundary);
        font-size: 12px;
    }
    
  }
`;

export const SmallDashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: auto;
    padding: 15px;
    margin: 25px auto;
    background-color: var(--color-white);
    box-shadow: 2px 2px 2px var(--color-gray-secundary);
    border-radius: 20px;
`;

