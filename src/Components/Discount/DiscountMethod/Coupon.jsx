import * as Styled from '../styled.jsx';

export const Coupon = () => {
  return (
    <Styled.DiscountMethodWrap>
      <Styled.CouponWrap>
        <Styled.DiscountMethodLabel>쿠폰</Styled.DiscountMethodLabel>
        <Styled.DiscountMethodLabel color="blueviolet" weight="bold">
          사용 가능한 쿠폰 장
        </Styled.DiscountMethodLabel>
      </Styled.CouponWrap>
      <Styled.CouponWrap>
        <Styled.CouponInput type="text" />
        <Styled.CouponBtn>선택</Styled.CouponBtn>
      </Styled.CouponWrap>
    </Styled.DiscountMethodWrap>
  );
};
