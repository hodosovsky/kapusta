import {
  StyledTable,
  StyledRow,
  StyledMonth,
  StyledTableHead,
  StyledValue,
} from './Summary.styled';

export const Summary = () => {
  return (
    <StyledTable>
      <StyledTableHead>SUMMARY</StyledTableHead>

      <StyledRow>
        <StyledMonth>november</StyledMonth>
        <StyledValue>10 000</StyledValue>
      </StyledRow>
      <StyledRow>
        <StyledMonth>december</StyledMonth>
        <StyledValue>15 000</StyledValue>
      </StyledRow>
      <StyledRow>
        <StyledMonth>january</StyledMonth>
        <StyledValue>25 050</StyledValue>
      </StyledRow>
    </StyledTable>
  );
};
