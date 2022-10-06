import { useState } from 'react';
import * as Styled from './styled.jsx';

export const Payment = ({ user, setResultPayment }) => {
  return (
    <Styled.PaymentWrap>
      <Styled.PaymentTitle>결제 수단 선택</Styled.PaymentTitle>
    </Styled.PaymentWrap>
  );
};
