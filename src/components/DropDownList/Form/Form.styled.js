import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;

    width: 100%;
  }
`;

export const InputProduct = styled.input`
  margin: auto auto;
  width: 280px;
  height: 44px;

  padding: 2px 20px;
  margin-top: 12px;

  border: 2px solid #ffffff;
  border-radius: 16px 16px 0 0;

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  outline: none;
  background-color: #f5f6fb;
  color: #c7ccdc;

  &::placeholder {
    color: #c7ccdc;
  }

  @media screen and (min-width: 768px) {
    width: 186px;

    border-color: #f5f6fb;

    background-color: #ffffff;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 32px;
    width: 290px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;

  margin-top: 80px;

  @media screen and (min-width: 768px) {
    gap: 15px;

    margin-top: 32px;
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;

    margin-top: 0;
    margin-left: 32px;
  }
`;
