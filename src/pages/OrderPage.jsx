import styled from 'styled-components';
import { Layout, OrdererAddress, OrdererPhoneNum, Title } from '../components';
import { useState, useContext } from 'react';
import { UserContext } from '../App';

export default function OrderPage() {
  const { user } = useContext(UserContext);
  const { address, phone_number } = user;

  //console.log(address);

  const [result, setResult] = useState({
    address: `${address.city} ${address.state} ${address.address_line}`,
    additional_address: `${address.additional_address}`,
    phone_number: phone_number.replace(/\-/g, ''),
  });

  console.log(result);

  const prop = { result, setResult };

  return (
    <OrderPageLayout>
      <Layout>
        <Title>주문자 정보</Title>
        <OrdererAddress prop={prop} />
        <OrdererPhoneNum prop={prop} />
      </Layout>
      <Layout></Layout>
      <Layout></Layout>
      <Layout></Layout>
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
