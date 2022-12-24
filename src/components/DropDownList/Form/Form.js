import { useMatchMedia } from '../../../hooks/use-match-media';
import DateSelection from '../../DateSelection/DateSelection';
import SelectCategory from '../SelectCategory/SelectCategory';
import CalculatorInput from '../CalculatorInput/CalculatorInput';
import { OrangeButton } from 'components/Buttons/OrangeButton';
import { WhiteButton } from 'components/Buttons/WhiteButton';
import { Wrapper, FormWrap, ButtonWrap, InputProduct } from './Form.styled';

export default function Form() {
  const { isMobile } = useMatchMedia();

  return (
    <Wrapper>
      <FormWrap>
        {!isMobile && <DateSelection />}
        <InputProduct placeholder="Product description" />
        <SelectCategory />
        <CalculatorInput />
      </FormWrap>
      <ButtonWrap>
        <OrangeButton>INPUT</OrangeButton>
        <WhiteButton>CLEAR</WhiteButton>
      </ButtonWrap>
    </Wrapper>
  );
}
