import * as Styled from '../styled.jsx';

export const FixedCoupon = ({ coupon }) => {
  return (
    <Styled.CouponLabel color="blueviolet" weight="bold" id={coupon.id}>
      {coupon.value} 원
    </Styled.CouponLabel>
  );
};
