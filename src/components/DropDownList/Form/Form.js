import { useMatchMedia } from '../../../hooks/use-match-media';
import DateSelection from '../../DateSelection/DateSelection';
import SelectCategory from '../SelectCategory/SelectCategory';
import CalculatorInput from '../CalculatorInput/CalculatorInput';
import { OrangeButton } from 'components/Buttons/OrangeButton';
import { WhiteButton } from 'components/Buttons/WhiteButton';
import {
  FormWrap,
  StyledForm,
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

  if (location.pathname === '/home/income' || location.pathname === '/income') {
    categoryArray = ['Salary', 'Additional income'];
    functionToDispatch = addIncome;
  }
  if (
    location.pathname === '/home/expenses' ||
    location.pathname === '/expenses'
  ) {
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
    let transValue = sum.value;
    // Checks for empty values
    if (descr.value.trim() === '') {
      toast('Please enter a description');
      return;
    }
    if (elementCategory === 'Category') {
      toast('Please enter a category');
      return;
    }
    if (transValue.trim() === '') {
      toast('Please enter an amount');
      return;
    }
    if (transValue < 0) transValue = transValue * -1;

    // Prepare data for dispatch
    const dataToDispatch = {
      description: descr.value,
      amount: Number(transValue),
      date: startDate.toISOString().split('T')[0],
      category: categoryEngToOrk(elementCategory),
    };
    // dispatch
    dispatch(functionToDispatch(dataToDispatch));
    event.target.reset();
    setElementCategory('Category');
  };

  return (
    <>
      <FormWrap>
        {!isMobile && (
          <div className="tabletDatepicker">
            <DateSelection startDate={startDate} setStartDate={setStartDate} />
          </div>
        )}
        <StyledForm onSubmit={handleSubmit}>
          <StyledAllInputsDiv>
            <InputProduct placeholder="Product description" name="descr" />
            <SelectCategory
              categoryArray={categoryArray}
              elementCategory={elementCategory}
              setElementCategory={setElementCategory}
            />
            <CalculatorInput name="sum" />
          </StyledAllInputsDiv>
          <ButtonWrap>
            <OrangeButton type="submit">INPUT</OrangeButton>
            <WhiteButton>CLEAR</WhiteButton>
          </ButtonWrap>
        </StyledForm>
      </FormWrap>
    </>
  );
}
