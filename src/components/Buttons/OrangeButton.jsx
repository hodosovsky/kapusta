import { StyledOrangeButton } from './Buttons.styled';

export const OrangeButton = ({
  children,
  dispatch,
  closeModal,
  changeBalance,
}) => {
  const handleClick = () => {
    if (children === 'YES') {
      dispatch();
      closeModal();
    }
    if (changeBalance) {
      dispatch();
      closeModal();
    }
  };

  return (
    <StyledOrangeButton onClick={handleClick}>{children}</StyledOrangeButton>
  );
};
