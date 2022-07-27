import React from 'react';
import { FilterButton, FilterContainer } from './style';
import { TbFilter } from 'react-icons/tb';

interface Props {
  onClick: () => void
}

const Filter: React.FC<Props> = ({onClick}) => {
  return (
    <FilterContainer>
      <FilterButton onClick={onClick}>
        <div>
          Filtrar
          <TbFilter />
        </div>
      </FilterButton>
    </FilterContainer>
  );
};

export default Filter;
