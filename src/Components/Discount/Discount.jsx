import { Coupon } from './DiscountMethod/Coupon.jsx';
import { Point } from './DiscountMethod/Point/Point.jsx';
import * as Styled from './styled.jsx';

export const Discount = ({
  user,
  resultDiscount,
  resultPrice,
  setIsMenu,
  setResultDiscount,
}) => {
  console.log(user);
  return (
    <Styled.DiscountWrap>
      <Styled.DiscountTitle>할인 수단 선택</Styled.DiscountTitle>
      <Coupon
        coupon={user.coupons}
        resultDiscount={resultDiscount}
        setIsMenu={setIsMenu}
      />
      <Point
        points={user.points}
        resultPrice={resultPrice}
        resultDiscount={resultDiscount}
        setResultDiscount={setResultDiscount}
      />
    </Styled.DiscountWrap>
  );
};
