import { useState } from 'react';
import { Discount } from '../Components/Discount/Discount.jsx';
import { Orderer } from '../Components/Orderer/Orderer.jsx';
import { Payment } from '../Components/PaymentMethod/Payment.jsx';
import * as Styled from './styled.jsx';

export const OrderPage = ({ user }) => {
  // 결과 State
  // 주문자
  const [resultOrderer, setResultOrderer] = useState({
    address: user.address,
    address_detail: user.address_detail,
    phone_number: user.phone_number,
  });
  // 주문 요청 사항
  const [resultRequest, setResultRequest] = useState({
    request: '',
    custom: false,
  });
  // 결제 수단 선택
  const [resultPayment, setResultPayment] = useState({
    payment: '',
  });

  return (
    <Styled.PageContainer>
      <Orderer
        user={user}
        resultOrderer={resultOrderer}
        setResultOrderer={setResultOrderer}
        resultRequest={resultRequest}
        setResultRequest={setResultRequest}
      />
      <Payment user={user} setResultPayment={setResultPayment} />
      <Discount />
    </Styled.PageContainer>
  );
};
