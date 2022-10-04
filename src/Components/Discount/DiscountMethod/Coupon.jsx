import * as Styled from '../styled.jsx';

export const Coupon = ({ coupon, setIsMenu }) => {
  const onHandlerDisplayCouponMenu = () => setIsMenu(true);

  return (
    <Styled.DiscountMethodWrap>
      <Styled.DiscountMethodContentWrap>
        <Styled.DiscountMethodLabel>쿠폰</Styled.DiscountMethodLabel>
        <Styled.DiscountMethodLabel color="blueviolet" weight="bold">
          사용 가능한 쿠폰 장
        </Styled.DiscountMethodLabel>
      </Styled.DiscountMethodContentWrap>
      <Styled.DiscountMethodContentWrap>
        <Styled.DiscountMethodInput type="text" />
        <Styled.DiscountMethodBtn onClick={onHandlerDisplayCouponMenu}>
          선택
        </Styled.DiscountMethodBtn>
      </Styled.DiscountMethodContentWrap>
    </Styled.DiscountMethodWrap>
  );
};
