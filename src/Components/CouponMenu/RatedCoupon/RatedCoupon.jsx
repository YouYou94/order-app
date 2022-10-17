import * as Styled from '../styled.jsx';

export const RatedCoupon = ({ coupon }) => {
  return (
    <Styled.CouponLabel color="blueviolet" weight="bold" id={coupon.id}>
      {coupon.value} %
    </Styled.CouponLabel>
  );
};
