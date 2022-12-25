import calculator from '../../../images/calculator.svg';
import {
  NumberMobil,
  InputMobile,
  Span,
  Number,
  InputNumber,
  Image,
} from './CalculatorInput.styled';
import { useMatchMedia } from 'hooks/use-match-media';

export default function Input() {
  const { isMobile } = useMatchMedia();
  return (
    <>
      {isMobile ? (
        <NumberMobil>
          <InputMobile type="number" placeholder="00.00 UAH" name="sum" />
          <Span>
            <img src={calculator} alt="calculator" />
          </Span>
        </NumberMobil>
      ) : (
        <Number>
          <InputNumber type="number" placeholder="0,00" name="sum" />
          <Image src={calculator} alt="calculator" />
        </Number>
      )}
    </>
  );
}
