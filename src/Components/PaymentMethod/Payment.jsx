import { useState } from 'react';
import * as Styled from './styled.jsx';

export const Payment = ({ user, setResultPayment }) => {
  return (
    <Styled.PaymentWrap>
      <Styled.PaymentTitle>결제 수단 선택</Styled.PaymentTitle>
      <Styled.CarouselContainer>
        <Styled.CarouselSlide>
          <Styled.CarouselContent>1번</Styled.CarouselContent>
          <Styled.CarouselContent>2번</Styled.CarouselContent>
        </Styled.CarouselSlide>
      </Styled.CarouselContainer>
      <Styled.CarouselBtnContainer>
        <Styled.CarouselPrevBtn></Styled.CarouselPrevBtn>
        <Styled.CarouselNextBtn></Styled.CarouselNextBtn>
      </Styled.CarouselBtnContainer>
    </Styled.PaymentWrap>
  );
};
