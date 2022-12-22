import React from 'react';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

import { StyledRegisterPage } from './RegisterPage.styled';

export default function RegisterPage() {
  return (
    <StyledRegisterPage>
      <RegistrationForm />
    </StyledRegisterPage>
  );
}
