import styled from 'styled-components';

export default function OrderPage() {
  return <OrderPageLayout></OrderPageLayout>;
}

export const OrderPageLayout = styled.div`
  max-width: 480px;
  min-width: 320px;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 8px;
`;
