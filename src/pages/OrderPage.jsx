import { useState } from 'react';
import styled from 'styled-components';
import Orderer from '../components/Orderer/Orderer';
import Payment from '../components/Payment/Payment';

export default function OrderPage() {
  const [user, setUser] = useState({
    info: {
      address: 'XX도 XX시 XX길 123',
      address_detail: 'XX아파트 X동 X호',
      phone_number: '01051906628',
    },
    additional_requests: [],
    payment_methods: [
      {
        id: '1ad2ff3',
        vendor_name: '눙협체크카드',
        card_number: '12345678910111',
      },
      {
        id: '4cw5gq6',
        vendor_name: '대한신용카드',
        card_number: '5555666677778888',
      },
    ],
  });

  return (
    <OrderPageLayout>
      <Orderer user={user.info} setUser={setUser} />
      <Payment />
    </OrderPageLayout>
  );
}

export const OrderPageLayout = styled.div`
  max-width: 480px;
  min-width: 320px;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 8px;
`;
