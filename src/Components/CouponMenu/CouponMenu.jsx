import * as Styled from './styled.jsx';
import { FIXED, COUPON } from '../../Constants.js';
import { CouponTypeCheck } from './CouponTypeCheck/CouponTypeCheck.jsx';

export const CouponMenu = ({
  coupon,
  setIsMenu,
  setResultDiscount,
  resultPrice,
}) => {
  const valueCheck = (value, resultPrice) => {
    if (value > resultPrice) return resultPrice;
    else return resultPrice - value;
  };

  const onHandlerSelectCoupon = event => {
    const selectCoupon = coupon.find(coupon => coupon.id === event.target.id);
    console.log(selectCoupon);

    let discountValue = 0;

    selectCoupon.type === FIXED
      ? (discountValue = valueCheck(selectCoupon.value, resultPrice))
      : (discountValue = Math.ceil((resultPrice * selectCoupon.value) / 100));

    setResultDiscount({
      method: COUPON,
      id: event.target.id,
      type: selectCoupon.type,
      value: selectCoupon.value,
      name: selectCoupon.name,
      price: discountValue,
    });

    setIsMenu(false);
  };

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
