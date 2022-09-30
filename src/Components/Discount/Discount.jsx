import { Coupon } from './DiscountMethod/Coupon.jsx';
import * as Styled from './styled.jsx';

export const Discount = () => {
  return (
    <Styled.DiscountWrap>
      <Styled.DiscountTitle>할인 수단 선택</Styled.DiscountTitle>
      <Coupon />
    </Styled.DiscountWrap>
  );
};
