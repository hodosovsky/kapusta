import React from 'react';
import { RegistrationForm } from 'components/RegisrationForm/RegistrationForm';

import { StyledRegisterPage } from './RegisterPage.styled';

export default function RegiserPage() {
  return (
    <StyledRegisterPage>
      <RegistrationForm />
    </StyledRegisterPage>
  );
}
