import styled, {keyframes} from "styled-components";

const myMove = keyframes`
    0% {right: 40px; opacity: 0.1}
    30% {right: 60px; opacity: 0.3}
    50% {right: 90px; opacity: 0.5}
    70%{right: 120px; opacity: 0.6}
    100%{right: 125px; opacity: 0.8}
`;

const myMoveMobile = keyframes`
    0% {right: 10px; opacity: 0.1}
    30% {right: 20px; opacity: 0.3}
    50% {right: 30px; opacity: 0.5}
    70%{right: 40px; opacity: 0.6}
    100%{right: 50px; opacity: 0.8}
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 134px;
  top: 153.3px;
  animation: ${myMove} 0.4s ease-out;
  
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-right: 1px solid var(--color-primary);
    padding: 8px;
    gap: 5px;
    color: var(--color-secundary);

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-white);
      cursor: pointer;
      transition: all 0.5s ease-out;
    }

  }
  
  input {
    margin-right: 10px;
  }

  @media(max-width: 537px) {
    right: 35px;
    top: 190px;
    animation: ${myMoveMobile} 0.4s ease-out;
    label {
      gap: 2px;
      border-right: 1px solid var(--color-primary);
      border-left: 1px solid var(--color-primary);
    }
  }
`;
