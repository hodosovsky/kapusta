import { StyledWhiteButton } from './Buttons.styled';

export const WhiteButton = ({ children, closeModal }) => {
  return <StyledWhiteButton onClick={closeModal}>{children}</StyledWhiteButton>;
};
