import { useEffect } from 'react';
import { NONE, COUPON, POINT, FIXED, RATED } from '../../Constants.js';
import { DiscountHistory } from './DiscountHistory/DiscountHistory.jsx';
import * as Styled from './styled.jsx';

export const OrderHistory = ({
  OrderBasket,
  resultDiscount,
  setResultPrice,
}) => {
  let totalPrice = 0;

  // 장바구니 내역
  const orderHistory = OrderBasket.map(order => {
    totalPrice = totalPrice + order.price;
    return (
      <Styled.OrderHistoryContent key={order.id}>
        <Styled.OrderHistoryLabel>{order.name}</Styled.OrderHistoryLabel>
        <Styled.OrderHistoryLabel>
          {order.price.toLocaleString('ko-KR')} 원
        </Styled.OrderHistoryLabel>
      </Styled.OrderHistoryContent>
    );
  });

  // 할인 내역
  let discountHistory = [];
  let discountPrice = 0;
  switch (resultDiscount.method) {
    case NONE:
      discountHistory = [];
      discountPrice = 0;
      break;
    case COUPON:
      resultDiscount.type === FIXED
        ? (discountPrice =
            resultDiscount.value > totalPrice
              ? totalPrice
              : resultDiscount.value)
        : (discountPrice = Math.ceil(
            (totalPrice * resultDiscount.value) / 100
          ));
      break;
    case POINT:
      discountPrice = resultDiscount.value;
      break;
    default:
      break;
  }

  discountHistory = (
    <DiscountHistory
      method={resultDiscount.method}
      discountPrice={discountPrice}
    />
  );

  useEffect(() => setResultPrice(totalPrice));

  return (
    <Styled.OrderHistoryWrap>
      <Styled.OrderHistoryTitle>배달 주문 내역</Styled.OrderHistoryTitle>
      <Styled.OrderHistoryContentWrap>
        {orderHistory}
        {discountHistory}
        <Styled.OrderHistoryContent>
          <Styled.OrderHistoryLabel>결제 금액</Styled.OrderHistoryLabel>
          <Styled.OrderHistoryLabel>
            {(totalPrice - discountPrice).toLocaleString('ko-KR')} 원
          </Styled.OrderHistoryLabel>
        </Styled.OrderHistoryContent>
      </Styled.OrderHistoryContentWrap>
    </Styled.OrderHistoryWrap>
  );
};
