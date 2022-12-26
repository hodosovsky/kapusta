import React from 'react';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import {
  StyledModalWindow,
  StyledBackdrop,
  StyledModalText,
  StyledModalTitle,
} from './ModalWindow.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

export default function ModalWindow() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalToggle = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      handleModalToggle();
    }
  };

  useEffect(() => {
    return () => body.classList.toggle('no-scroll');
  });

  return createPortal(
    isModalOpen && (
      <StyledBackdrop onClick={handleBackdropClick}>
        <StyledModalWindow>
          <StyledModalTitle>
            Hello! To get started, enter the current balance of your account!
          </StyledModalTitle>
          <StyledModalText>
            You can't spend money until you have it
          </StyledModalText>
        </StyledModalWindow>
      </StyledBackdrop>
    ),
    modalRoot
  );
}
