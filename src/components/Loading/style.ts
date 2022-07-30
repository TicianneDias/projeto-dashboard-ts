import styled, {keyframes} from 'styled-components';

export const SideToSide = keyframes`
    0% {
        background: var(--color-primary);
        box-shadow: 0 0 10px var(--color-primary);
        width: 100px;
        left: 0;
        
    }
    25% {
        background: var(--color-primary);
        box-shadow: 0 0 10px var(--color-primary);
        width: 300px;
        left: 0;
    }
    50% {
        background: var(--color-secundary);
        box-shadow: 0 0 10px var(--color-secundary);
        width: 100px;
        left: 90px;
    }
    75% {
        background: var(--color-secundary);
        box-shadow: 0 0 10px var(--color-secundary);
        width: 300px;
        left: 0;
    }
    100% {
        background: var(--color-primary);
        box-shadow: 0 0 10px var(--color-primary);
        width: 100px;
        left: 0;
    }
    `;

export const Load = styled.div`
  margin: 150px auto;
  height: 15px;
  border-radius: 5px;
  background-color: var(--color-primary);
  box-shadow: 0 0 10px var(--color-primary);
  animation: ${SideToSide} 2s ease infinite;
  @media (max-width: 800px) {
    margin: 350px auto;
  }
`;