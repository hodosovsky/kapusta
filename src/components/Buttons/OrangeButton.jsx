import { StyledOrangeButton } from './Buttons.styled';

export const OrangeButton = ({ children, dispatch, closeModal }) => {
  const handleClick = () => {
    if (children === 'YES') {
      dispatch();
      closeModal();
    }
  };

  return (
    <StyledOrangeButton onClick={handleClick}>{children}</StyledOrangeButton>
  );
};
