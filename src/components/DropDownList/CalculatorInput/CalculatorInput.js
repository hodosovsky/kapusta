import calculator from '../../../images/calculator.svg';
import {
  NumberMobil,
  InputMobile,
  Span,
  Number,
  InputNumber,
  Image,
} from './CalculatorInput.styled';

export default function Input() {
  return (
    <>
      <NumberMobil>
        <InputMobile type="number" placeholder="00.00 UAH" />
        <Span>
          <img src={calculator} alt="calculator" />
        </Span>
      </NumberMobil>
      <Number>
        <InputNumber type="number" placeholder="0,00" />
        <Image src={calculator} alt="calculator" />
      </Number>
    </>
  );
}
