import * as Styled from './styled.jsx';
import { FIXED, COUPON } from '../../Constants.js';
import { CouponList } from './CouponList/CouponList.jsx';

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

    let discountValue =
      selectCoupon.type === FIXED
        ? valueCheck(selectCoupon.value, resultPrice)
        : Math.ceil((resultPrice * selectCoupon.value) / 100);

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

  return (
    <Styled.CouponMenuContainer>
      <Styled.CouponMenuWhiteSpace
        onClick={() => setIsMenu(false)}
      ></Styled.CouponMenuWhiteSpace>
      <Styled.CouponMenuWrap>
        <Styled.CouponMenuTitle>보유 쿠폰</Styled.CouponMenuTitle>
        <CouponList
          coupon={coupon}
          onHandlerSelectCoupon={onHandlerSelectCoupon}
        />
      </Styled.CouponMenuWrap>
    </Styled.CouponMenuContainer>
  );
};
