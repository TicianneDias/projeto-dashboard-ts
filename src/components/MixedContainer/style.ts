import styled from 'styled-components';

export const MixedContainerDashboards = styled.div`
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

export const GraphicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  @media(max-width: 1285px) {
        flex-direction: column;
    }

`;

export const LittleGraphicContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 100px;

  h5 {
    color: var(--color-secundary);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-left: 10px;

  h3 {
    color: var(--color-primary);
  }

  #icon {
        color: var(--color-secundary);
        font-size: 20px;
        margin-left: 2px;
        &:hover {
            color: var(--color-blue);
        }
    }
`;

export const TooltipBoxMixedContainer= styled.div`
  position: absolute;
  top: -35px;
  left: 23px;
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
`;