import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledModalWindow = styled.div`
  position: relative;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 280px;
  max-height: 163px;
  width: 100%;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    max-width: 288px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: -9%;
    left: 20%;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 16px solid #1d346a;
  }
`;

export const StyledModalTitle = styled.h2`
  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 20px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    padding-left: 29px;
    padding-right: 29px;
  }
`;

export const StyledModalText = styled.p`
  padding-bottom: 49px;
  padding-left: 24px;
  padding-right: 24px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    padding-left: 29px;
    padding-right: 29px;
  }
`;
