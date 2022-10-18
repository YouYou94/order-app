import * as Styled from '../styled.jsx';

export const BasketHistory = ({ OrderBasket }) => {
  const basketHistory = OrderBasket.map(order => {
    return (
      <Styled.OrderHistoryContent key={order.id}>
        <Styled.OrderHistoryLabel>{order.name}</Styled.OrderHistoryLabel>
        <Styled.OrderHistoryLabel>
          {order.price.toLocaleString('ko-KR')} 원
        </Styled.OrderHistoryLabel>
      </Styled.OrderHistoryContent>
    );
  });
  return basketHistory;
};
