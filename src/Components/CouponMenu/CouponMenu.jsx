import * as Styled from './styled.jsx';
import { RATED, FIXED, COUPON } from '../../Constants.js';

export const CouponMenu = ({
  coupon,
  setIsMenu,
  setResultDiscount,
  resultPrice,
}) => {
  const onHandlerSelectCoupon = event => {
    const selectCoupon = coupon.filter(coupon => coupon.id === event.target.id);
    console.log(selectCoupon);

    let discountValue = 0;

    if (selectCoupon[0].type === FIXED) {
      if (Number(selectCoupon[0].value) > resultPrice)
        discountValue = resultPrice;
      else discountValue = resultPrice - Number(selectCoupon[0].value);
    } else if (selectCoupon[0].type === RATED) {
      discountValue = Math.ceil(
        (resultPrice * Number(selectCoupon[0].value)) / 100
      );
    }

    setResultDiscount({
      method: COUPON,
      type: selectCoupon[0].type,
      value: selectCoupon[0].value,
      name: selectCoupon[0].name,
      price: discountValue,
    });
    setIsMenu(false);
  };

  const couponList = coupon.map(coupon => {
    if (coupon.type === FIXED)
      return (
        <Styled.CouponContent
          key={coupon.id}
          onClick={onHandlerSelectCoupon}
          id={coupon.id}
        >
          <Styled.CouponLabel color="blueviolet" weight="bold" id={coupon.id}>
            {coupon.value} 원
          </Styled.CouponLabel>
          <Styled.CouponLabel id={coupon.id}>{coupon.name}</Styled.CouponLabel>
        </Styled.CouponContent>
      );
    else if (coupon.type === RATED)
      return (
        <Styled.CouponContent
          key={coupon.id}
          onClick={onHandlerSelectCoupon}
          id={coupon.id}
        >
          <Styled.CouponLabel color="blueviolet" weight="bold" id={coupon.id}>
            {coupon.value} %
          </Styled.CouponLabel>
          <Styled.CouponLabel id={coupon.id}>{coupon.name}</Styled.CouponLabel>
        </Styled.CouponContent>
      );
    else return null;
  });

  //console.log(coupon);
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