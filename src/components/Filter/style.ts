import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 35px;
  margin-top: 25px;
  margin-bottom: 25px;
  `;
export const FilterButton = styled.button`
  background-color: var(--color-bg);
  cursor: pointer;
  color: var(--color-secundary);
  border: 1px solid var(--color-primary);
  padding: 5px 10px;
  transition: all 0.4s ease-out;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-bg);
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;