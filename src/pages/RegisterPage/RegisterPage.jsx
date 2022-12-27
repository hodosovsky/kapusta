import React from 'react';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

import { useMatchMedia } from '../../hooks/use-match-media';
import {
  StyledRegisterPage,
  Image,
  Background,
  KapustaMobBottom,
  KapustaTabBotLeft,
  KapustaTabBotRight,
  ShadowTabBotLeft,
  TextWrap,
  ShadowTabBotRight,
  Text,
} from './RegisterPage.styled';
import BackgroundAnimation from '../../components/BackgroundAnimation/BackgroundAnimation';
import Name from '../../images/union.svg';
import imageMobBg from '../../images/reportsFiles/backgroundMobile.png';
import imageTabBg from '../../images/reportsFiles/backgroundTablet.png';
import imageDeskBg from '../../images/reportsFiles/backgroundDesktop.png';
import kapusta from '../../images/kapusta.svg';
import tabShadow from '../../images/tabEllipse.svg';

export default function RegisterPage() {
  const { isMobile } = useMatchMedia();
  const { isTablet } = useMatchMedia();
  const { isDesktop } = useMatchMedia();
  return (
    <StyledRegisterPage>
      <Background
        imgMobUrl={imageMobBg}
        imgTabUrl={imageTabBg}
        imgDeskUrl={imageDeskBg}
      >
        {isMobile && (
          <>
            <BackgroundAnimation />
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
        <TextWrap>
          <Image src={Name} alt="Kapusta" />
          <Text>Smart Finance</Text>
        </TextWrap>
        <RegistrationForm />
      </Background>
    </StyledRegisterPage>
  );
}
