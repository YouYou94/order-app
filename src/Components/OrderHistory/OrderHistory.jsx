import { useEffect } from 'react';
import { NONE, COUPON, POINT, FIXED, RATED } from '../../Constants.js';
import * as Styled from './styled.jsx';

export const OrderHistory = ({
  OrderBasket,
  resultDiscount,
  setResultPrice,
}) => {
  let totalPrice = 0;

  // 장바구니 내역
  const orderHistory = OrderBasket.map(order => {
    totalPrice = totalPrice + Number(order.price);
    return (
      <Styled.OrderHistoryContent key={order.id}>
        <Styled.OrderHistoryLabel>{order.name}</Styled.OrderHistoryLabel>
        <Styled.OrderHistoryLabel>{order.price} 원</Styled.OrderHistoryLabel>
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
      switch (resultDiscount.type) {
        case FIXED:
          if (resultDiscount.value > totalPrice) discountPrice = totalPrice;
          else discountPrice = resultDiscount.value;

          discountHistory = (
            <Styled.OrderHistoryContent>
              <Styled.OrderHistoryLabel>* {COUPON}</Styled.OrderHistoryLabel>
              <Styled.OrderHistoryLabel>
                - {discountPrice} 원
              </Styled.OrderHistoryLabel>
            </Styled.OrderHistoryContent>
          );
          break;
        case RATED:
          discountPrice = Math.ceil((totalPrice * resultDiscount.value) / 100);

          discountHistory = (
            <Styled.OrderHistoryContent>
              <Styled.OrderHistoryLabel>* {COUPON}</Styled.OrderHistoryLabel>
              <Styled.OrderHistoryLabel>
                - {discountPrice} 원
              </Styled.OrderHistoryLabel>
            </Styled.OrderHistoryContent>
          );
          break;
        default:
          break;
      }
      break;
    case POINT:
      discountPrice = resultDiscount.value;
      discountHistory = (
        <Styled.OrderHistoryContent>
          <Styled.OrderHistoryLabel>* {POINT}</Styled.OrderHistoryLabel>
          <Styled.OrderHistoryLabel>
            {' '}
            - {discountPrice} 원
          </Styled.OrderHistoryLabel>
        </Styled.OrderHistoryContent>
      );
      break;
    default:
      break;
  }

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
            {totalPrice - discountPrice} 원
          </Styled.OrderHistoryLabel>
        </Styled.OrderHistoryContent>
      </Styled.OrderHistoryContentWrap>
    </Styled.OrderHistoryWrap>
  );
};