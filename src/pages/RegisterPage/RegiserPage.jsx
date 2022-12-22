import React from 'react';
import { RegistrationForm } from 'components/RegisrationForm/RegistrationForm';

import { StyledRegisterPage } from './RegisterPage.styled';

export default function RegisterPage() {
  return (
    <StyledRegisterPage>
      <RegistrationForm />
    </StyledRegisterPage>
  );
}
