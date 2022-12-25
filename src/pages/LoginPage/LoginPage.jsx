import React from 'react';
import { LoginForm } from 'components/LoginForm/LoginForm';

import { StyledLoginPage, Image, Background, Text } from './LoginPage.styled';
import Name from '../../images/union.svg';

export default function LoginPage() {
  return (
    <StyledLoginPage>
      <Background>
        <Image src={Name} alt="Kapusta" />
        <Text>Smart Finance</Text>
      </Background>
      <LoginForm />
    </StyledLoginPage>
  );
}
