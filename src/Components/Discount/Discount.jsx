import { Coupon } from './DiscountMethod/Coupon.jsx';
import { Point } from './DiscountMethod/Point.jsx';
import * as Styled from './styled.jsx';

export const Discount = ({ resultDiscount, setIsMenu }) => {
  return (
    <Styled.DiscountWrap>
      <Styled.DiscountTitle>할인 수단 선택</Styled.DiscountTitle>
      <Coupon resultDiscount={resultDiscount} setIsMenu={setIsMenu} />
      <Point />
    </Styled.DiscountWrap>
  );
};
