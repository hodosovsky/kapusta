import styled from 'styled-components';

export const StyledDatePicker = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  .icon {
    width: 18px;
    height: 20px;
  }
  .datePicker {
    font-size: 12px;
    font-weight: 900;
    line-height: calc(14 / 12);
    letter-spacing: 1.04;
    color: #52555f;
    outline: none;
    border: none;
    cursor: pointer;
    :hover,
    :focus {
      color: #ff751d;
    }
  }
`;
