import React from 'react';
import { LoginForm } from 'components/LoginForm/LoginForm';

import { StyledLoginPage } from './LoginPage.styled';

export default function LoginPage() {
  return (
    <StyledLoginPage>
      <LoginForm />
    </StyledLoginPage>
  );
}
