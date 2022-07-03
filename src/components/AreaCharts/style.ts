import styled from 'styled-components';

export const BigDashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1280px;
    height: auto;
    padding: 15px;
    margin: 25px auto;
    background-color: var(--color-white);
    box-shadow: 2px 2px 2px var(--color-gray-secundary);
    border-radius: 20px;

    @media(max-width: 1285px) {
        width: 1000px;
    }

    @media(max-width: 1038px) {
        width: 820px;
    }

    @media(max-width: 830px) {
        width: 620px;
    }

    @media(max-width: 630px) {
        width: 520px;
    }

    @media(max-width: 534px) {
        width: 370px;
    }
`;

export const IconBigContainer = styled.div`
    position: relative;
    z-index: 999;
    cursor: pointer;
    top: 29px;
    right: 500px;

    #iconBigDash {
        color: var(--color-secundary);
        font-size: 20px;
        &:hover {
            color: var(--color-blue);
        }
    }

    @media(max-width: 1285px) {
        right: 320px;
    }

    @media(max-width: 830px) {
        right: 220px;
    }

    @media(max-width: 630px) {
        right: 170px;
    }

    @media(max-width: 534px) {
        right: 100px;
    }
`;

export const TooltipBoxBigDashboard = styled.div`
  position: absolute;
  top: -5px;
  left: -480px;
  visibility: hidden;
  width: 180px;
  padding: 5px;
  border-radius: 4px;
  transition: all 1ms ease-in-out;
  
    @media(max-width: 1285px) {
        left: -300px;
    }

    @media(max-width: 830px) {
        left: -200px;
    }

    @media(max-width: 630px) {
        left: -150px;
    }

    @media(max-width: 534px) {
        left: -82px;
    }
  
  &:before {
      left: 40px;
      top: -10px;
      position: absolute;
  }
`;