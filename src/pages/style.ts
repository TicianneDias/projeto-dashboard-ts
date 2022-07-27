import styled, {keyframes} from "styled-components";

const myMove = keyframes`
    0% {right: 40px; opacity: 0.1}
    30% {right: 60px; opacity: 0.3}
    50% {right: 90px; opacity: 0.5}
    70%{right: 120px; opacity: 0.6}
    100%{right: 125px; opacity: 0.8}
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 134px;
  top: 153.8px;
  border: 1px solid var(--color-primary);
  padding: 7.7px;
  animation: ${myMove} 0.4s ease-out;
  
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: var(--color-secundary);
  }

  input {
    margin-right: 10px;
  }
`;
