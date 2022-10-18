import { FIXED } from '../../../Constants.js';
import * as Styled from '../styled.jsx';

export const CouponTypeCheck = ({ coupon }) => {
  return (
    <Styled.CouponLabel color="blueviolet" weight="bold" id={coupon.id}>
      {coupon.type === FIXED ? `${coupon.value} 원` : `${coupon.value} %`}
    </Styled.CouponLabel>
  );
};
