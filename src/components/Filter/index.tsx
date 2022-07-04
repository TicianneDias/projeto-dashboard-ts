import React from 'react';
import { FilterButton, FilterContainer } from './style';
import { TbFilter } from 'react-icons/tb';

const Filter = () => {
  return (
    <FilterContainer>
      <FilterButton>
        <div>
          Filtrar
          <TbFilter />
        </div>
      </FilterButton>
    </FilterContainer>
  );
};

export default Filter;
