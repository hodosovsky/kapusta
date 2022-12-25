import { useMatchMedia } from '../../../hooks/use-match-media';
import DateSelection from '../../DateSelection/DateSelection';
import SelectCategory from '../SelectCategory/SelectCategory';
import CalculatorInput from '../CalculatorInput/CalculatorInput';
import { OrangeButton } from 'components/Buttons/OrangeButton';
import { WhiteButton } from 'components/Buttons/WhiteButton';
import {
  Wrapper,
  FormWrap,
  ButtonWrap,
  InputProduct,
  StyledAllInputsDiv,
} from './Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense, addIncome } from 'redux/transactions/operations';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';
import { categoryEngToOrk } from 'hooks/useCategory';

export default function Form() {
  const dispatch = useDispatch();
  const { isMobile } = useMatchMedia();
  const [startDate, setStartDate] = useState(new Date());
  const [elementCategory, setElementCategory] = useState('Category');
  const location = useLocation();
  let categoryArray;
  let functionToDispatch;

  if (location.pathname === '/home/income') {
    categoryArray = ['Salary', 'Additional income'];
    functionToDispatch = addIncome;
  }
  if (location.pathname === '/home/expenses') {
    categoryArray = [
      'Products',
      'ЗСУ',
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
    functionToDispatch = addExpense;
  }

  const handleSubmit = event => {
    event.preventDefault();
    const { descr, sum } = event.target.elements;
    // Checks for empty values
    if (descr.value.trim() === '') {
      toast('Please enter a description');
      return;
    }
    if (elementCategory === 'Category') {
      toast('Please enter a category');
      return;
    }
    if (sum.value.trim() === '') {
      toast('Please enter an amount');
      return;
    }
    // Prepare data for dispatch
    const dataToDispatch = {
      description: descr.value,
      amount: Number(sum.value),
      date: startDate.toISOString().split('T')[0],
      category: categoryEngToOrk(elementCategory),
    };
    // dispatch
    dispatch(functionToDispatch(dataToDispatch));
  };

  return (
    <>
      <Wrapper onSubmit={handleSubmit}>
        <FormWrap>
          {!isMobile && (
            <DateSelection startDate={startDate} setStartDate={setStartDate} />
          )}
          <StyledAllInputsDiv>
            <InputProduct placeholder="Product description" name="descr" />
            <SelectCategory
              categoryArray={categoryArray}
              elementCategory={elementCategory}
              setElementCategory={setElementCategory}
            />
            <CalculatorInput name="sum" />
          </StyledAllInputsDiv>
        </FormWrap>
        <ButtonWrap>
          <OrangeButton type="submit">INPUT</OrangeButton>
          <WhiteButton>CLEAR</WhiteButton>
        </ButtonWrap>
      </Wrapper>
    </>
  );
}
