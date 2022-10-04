import * as Styled from './styled.jsx';
import { RATED, FIXED } from '../../Constants.js';

export const CouponMenu = ({ coupon, setIsMenu }) => {
  const couponList = coupon.map(coupon => {
    if (coupon.type === FIXED)
      return (
        <Styled.CouponContent key={coupon.id}>
          <Styled.CouponLabel color="blueviolet" weight="bold">
            {coupon.value} 원
          </Styled.CouponLabel>
          <Styled.CouponLabel>{coupon.name}</Styled.CouponLabel>
        </Styled.CouponContent>
      );
    else if (coupon.type === RATED)
      return (
        <Styled.CouponContent key={coupon.id}>
          <Styled.CouponLabel color="blueviolet" weight="bold">
            {coupon.value} %
          </Styled.CouponLabel>
          <Styled.CouponLabel>{coupon.name}</Styled.CouponLabel>
        </Styled.CouponContent>
      );
    else return null;
  });

  console.log(coupon);
  return (
    <Styled.CouponMenuContainer>
      <Styled.CouponMenuWhiteSpace
        onClick={() => setIsMenu(false)}
      ></Styled.CouponMenuWhiteSpace>
      <Styled.CouponMenuWrap>
        <Styled.CouponMenuTitle>보유 쿠폰</Styled.CouponMenuTitle>
        {couponList}
      </Styled.CouponMenuWrap>
    </Styled.CouponMenuContainer>
  );
};
