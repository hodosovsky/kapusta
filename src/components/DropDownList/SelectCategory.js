import React, { useState } from 'react';
import arrow from '../../images/arrow-bottom.svg';
import { Category, Wrap, SelectBody } from './SelectCategory.styled';

export default function SelectCategory() {
  const [selectCategory, setSelectCategory] = useState(false);
  const [elementCategory, setElementCategory] = useState('Product category');

  const categoryArray = [
    'Products',
    'Alcohol',
    'Entertainment',
    'Health',
    'Transport',
    'Housing',
    'Technics',
    'Communal and communication',
    'Sport and hobby',
    'Education',
    'Other',
  ];

  const onSelect = () => {
    setSelectCategory(!selectCategory);
  };

  const getElementCategory = event => {
    setSelectCategory(!selectCategory);
    setElementCategory(event.target.innerText);
  };

  return (
    <Category>
      <Wrap onClick={onSelect}>
        <span>{elementCategory}</span>
        <img src={arrow} alt="vector" />
      </Wrap>
      {selectCategory && (
        <SelectBody>
          {categoryArray.map(el => (
            <div key={el} onClick={getElementCategory}>
              {el}
            </div>
          ))}
        </SelectBody>
      )}
    </Category>
  );
}
