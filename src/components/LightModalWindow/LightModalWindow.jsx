import { createPortal } from 'react-dom';

import {
  StyledModalWindow,
  StyledContentDiv,
  StyledText,
  StyledDivWithButtons,
  StyledCloseButton,
  StyledModalBackdrop,
} from './LightModalWindow.styled';
import { OrangeButton } from 'components/Buttons/OrangeButton';
import { WhiteButton } from 'components/Buttons/WhiteButton';
import close from '../../images/close.svg';
import { useEffect } from 'react';

const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');

export const LightModalWindow = ({ children, closeModal, dispatch }) => {
  const handleEscapeClose = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.toggle('no-scroll');
    };
  });

  return createPortal(
    <StyledModalBackdrop
      className="modal-backdrop"
      onClick={handleBackdropClose}
    >
      <StyledModalWindow>
        <StyledCloseButton onClick={closeModal}>
          <img src={close} alt="close" />
        </StyledCloseButton>
        <StyledContentDiv>
          <StyledText>{children}</StyledText>
          <StyledDivWithButtons>
            <OrangeButton dispatch={dispatch} closeModal={closeModal}>
              YES
            </OrangeButton>
            <WhiteButton closeModal={closeModal}>NO</WhiteButton>
          </StyledDivWithButtons>
        </StyledContentDiv>
      </StyledModalWindow>
    </StyledModalBackdrop>,
    modalRoot
  );
};
