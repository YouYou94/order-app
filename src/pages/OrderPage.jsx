import styled from 'styled-components';
import Orderer from '../components/Orderer/Orderer';
import Payment from '../components/Payment/Payment';

export default function OrderPage() {
  return (
    <OrderPageLayout>
      <Orderer />
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
