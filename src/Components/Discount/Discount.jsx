import { Coupon } from './DiscountMethod/Coupon.jsx';
import { Point } from './DiscountMethod/Point.jsx';
import * as Styled from './styled.jsx';

export const Discount = ({
  user,
  resultDiscount,
  resultPrice,
  setIsMenu,
  setResultDiscount,
}) => {
  return (
    <Styled.DiscountWrap>
      <Styled.DiscountTitle>할인 수단 선택</Styled.DiscountTitle>
      <Coupon
        user={user}
        resultDiscount={resultDiscount}
        setIsMenu={setIsMenu}
      />
      <Point
        user={user}
        resultPrice={resultPrice}
        resultDiscount={resultDiscount}
        setResultDiscount={setResultDiscount}
      />
    </Styled.DiscountWrap>
  );
};
