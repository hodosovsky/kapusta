import React, { useState } from 'react';
import arrow from '../../../images/arrow-bottom.svg';
import { Category, Wrap, SelectBody, Element } from './SelectCategory.styled';

export default function SelectCategory({
  elementCategory,
  setElementCategory,
  categoryArray,
}) {
  const [selectCategory, setSelectCategory] = useState(false);

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
          {categoryArray.map(element => (
            <Element key={element} onClick={getElementCategory}>
              {element}
            </Element>
          ))}
        </SelectBody>
      )}
    </Category>
  );
}
