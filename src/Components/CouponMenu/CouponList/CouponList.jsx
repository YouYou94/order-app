import * as Styled from '../styled.jsx';
import { CouponTypeCheck } from './CouponTypeCheck.jsx';

export const CouponList = ({ coupon, onHandlerSelectCoupon }) => {
  const couponList = coupon.map(coupon => {
    return (
      <Styled.CouponContent
        key={coupon.id}
        onClick={onHandlerSelectCoupon}
        id={coupon.id}
      >
        <CouponTypeCheck coupon={coupon} />
        <Styled.CouponLabel id={coupon.id}>{coupon.name}</Styled.CouponLabel>
      </Styled.CouponContent>
    );
  });

  return couponList;
};
