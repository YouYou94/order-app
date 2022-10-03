import * as Styled from './styled.jsx';

export const OrderHistory = ({ OrderBasket }) => {
  const orderHistory = OrderBasket.map(order => {
    return (
      <Styled.OrderHistoryContent key={order.id}>
        <Styled.OrderHistoryLabel>{order.name}</Styled.OrderHistoryLabel>
        <Styled.OrderHistoryLabel>{order.price} 원</Styled.OrderHistoryLabel>
      </Styled.OrderHistoryContent>
    );
  });

  return (
    <Styled.OrderHistoryWrap>
      <Styled.OrderHistoryTitle>배달 주문 내역</Styled.OrderHistoryTitle>
      <Styled.OrderHistoryContentWrap>
        {orderHistory}
      </Styled.OrderHistoryContentWrap>
    </Styled.OrderHistoryWrap>
  );
};
