import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: auto;
    padding: 15px;
    
    margin: 25px auto;
    background-color: var(--color-white);
    box-shadow: 2px 2px 2px var(--color-gray-secundary);
    border-radius: 20px;
    /* border: 0.3px solid var(--color-dark); */

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
    right: 190px;
    
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
    justify-content: center;
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
  top: -5px;
  left: -170px;
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
  & ${TooltipText}:hover + ${TooltipBox} {
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