import { useEffect } from 'react';
import { NONE, COUPON, POINT, FIXED } from '../../Constants.js';
import { BasketHistory } from './History/BasketHistory.jsx';
import { DiscountHistory } from './History/DiscountHistory.jsx';
import { TotalHistory } from './History/TotalHistory.jsx';
import * as Styled from './styled.jsx';

export const OrderHistory = ({
  OrderBasket,
  TOTALPRICE,
  resultDiscount,
  setResultPrice,
}) => {
  let totalPrice = TOTALPRICE.price;

  // 할인 금액
  let discountPrice = 0;
  switch (resultDiscount.method) {
    case NONE:
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

  useEffect(() => setResultPrice(TOTALPRICE.price));

  return (
    <Styled.OrderHistoryWrap>
      <Styled.OrderHistoryTitle>배달 주문 내역</Styled.OrderHistoryTitle>
      <Styled.OrderHistoryContentWrap>
        <BasketHistory OrderBasket={OrderBasket} />
        <DiscountHistory
          method={resultDiscount.method}
          discountPrice={discountPrice}
        />
        <Styled.OrderHistoryContent>
          <TotalHistory TOTALPRICE={TOTALPRICE} discountPrice={discountPrice} />
        </Styled.OrderHistoryContent>
      </Styled.OrderHistoryContentWrap>
    </Styled.OrderHistoryWrap>
  );
};
