import { useState } from 'react';
import { Orderer } from '../Components/Orderer/Orderer.jsx';
import { Payment } from '../Components/Payment/Payment.jsx';
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

  return (
    <Styled.PageContainer>
      <Orderer
        user={user}
        resultOrderer={resultOrderer}
        setResultOrderer={setResultOrderer}
        resultRequest={resultRequest}
        setResultRequest={setResultRequest}
      />
      <Payment />
    </Styled.PageContainer>
  );
};
