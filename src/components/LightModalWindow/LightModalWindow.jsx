import {
  StyledModalWindow,
  StyledContentDiv,
  StyledText,
  StyledDivWithButtons,
  StyledCloseButton,
} from './LightModalWindow.styled';
import { OrangeButton } from 'components/Buttons/OrangeButton';
import { WhiteButton } from 'components/Buttons/WhiteButton';
import close from '../../images/close.svg';

export const LightModalWindow = ({ children }) => {
  return (
    <StyledModalWindow>
      <StyledCloseButton>
        <img src={close} alt="close" />
      </StyledCloseButton>
      <StyledContentDiv>
        <StyledText>{children}</StyledText>
        <StyledDivWithButtons>
          <OrangeButton>YES</OrangeButton>
          <WhiteButton>NO</WhiteButton>
        </StyledDivWithButtons>
      </StyledContentDiv>
    </StyledModalWindow>
  );
};
