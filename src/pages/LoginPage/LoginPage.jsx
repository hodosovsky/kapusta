import React from 'react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useMatchMedia } from '../../hooks/use-match-media';

import {
  StyledLoginPage,
  Image,
  Background,
  KapustaMobTop,
  KapustaMobBottom,
  KapustaTabBotLeft,
  KapustaTabBotRight,
  ShadowTabBotLeft,
  ShadowTabBotRight,
  Text,
} from './LoginPage.styled';
import BackgroundAnimation from './BackgroundAnimation';
import Name from '../../images/union.svg';
import imageMobBg from '../../images/reportsFiles/backgroundMobile.png';
import imageTabBg from '../../images/reportsFiles/backgroundTablet.png';
import imageDeskBg from '../../images/reportsFiles/backgroundDesktop.png';
import kapusta from '../../images/kapusta.svg';
import tabShadow from '../../images/tabEllipse.svg';

export default function LoginPage() {
  const { isMobile } = useMatchMedia();
  const { isTablet } = useMatchMedia();
  const { isDesktop } = useMatchMedia();
  return (
    <>
      <StyledLoginPage>
        <Background
          imgMobUrl={imageMobBg}
          imgTabUrl={imageTabBg}
          imgDeskUrl={imageDeskBg}
        >
          {isMobile && (
            <>
              <KapustaMobTop src={kapusta} width="83" height="89" />
              <KapustaMobBottom src={kapusta} width="83" height="89" />
            </>
          )}

          {isTablet && (
            <>
              <BackgroundAnimation />
              <KapustaTabBotLeft src={kapusta} width="83" height="89" />
              <ShadowTabBotLeft src={tabShadow} width="83" height="89" />
              <KapustaTabBotRight src={kapusta} width="83" height="89" />
              <ShadowTabBotRight src={tabShadow} width="83" height="89" />
            </>
          )}
          {isDesktop && (
            <>
              <BackgroundAnimation />
              <KapustaTabBotLeft src={kapusta} width="83" height="89" />
              <ShadowTabBotLeft src={tabShadow} width="83" height="89" />
              <KapustaTabBotRight src={kapusta} width="83" height="89" />
              <ShadowTabBotRight src={tabShadow} width="83" height="89" />
            </>
          )}
          <Image src={Name} alt="Kapusta" />
          <Text>Smart Finance</Text>
        </Background>
        <LoginForm />
      </StyledLoginPage>
    </>
  );
}
