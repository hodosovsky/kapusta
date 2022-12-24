import React from 'react';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import {
  StyledModalWindow,
  StyledBackdrop,
  StyledModalText,
  StyledModalTitle,
} from './ModalWindow.styled';

const modalRoot = document.querySelector('#modal-root');

export default function ModalWindow() {
   
    const [isModalOpen, setIsModalOpen] = useState(true);
    const handleModalToggle = () => {
      setIsModalOpen(!isModalOpen);
    };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      handleModalToggle();
      }
  };

    return createPortal(
      <StyledBackdrop onClick={handleBackdropClick}>
        {isModalOpen && (
          <StyledModalWindow>
            <StyledModalTitle>
              Hello! To get started, enter the current balance of your account!
            </StyledModalTitle>
            <StyledModalText>
              You can't spend money until you have it :)
            </StyledModalText>
          </StyledModalWindow>
        )}
      </StyledBackdrop>,
      modalRoot
    );
}
