import * as Styled from '../styled.jsx';
import { COUPON } from '../../../Constants.js';

export const Coupon = ({ user, resultDiscount, setIsMenu }) => {
  const onHandlerDisplayCouponMenu = () => setIsMenu(true);

  return (
    <Styled.DiscountMethodWrap>
      <Styled.DiscountMethodContentWrap>
        <Styled.DiscountMethodLabel>쿠폰</Styled.DiscountMethodLabel>
        <Styled.DiscountMethodLabel color="blueviolet" weight="bold">
          사용 가능한 쿠폰 {user.coupons.length}장
        </Styled.DiscountMethodLabel>
      </Styled.DiscountMethodContentWrap>
      <Styled.DiscountMethodContentWrap>
        <Styled.DiscountMethodInput
          type="text"
          defaultValue={
            resultDiscount.method === COUPON ? resultDiscount.name : ''
          }
        />
        <Styled.DiscountMethodBtn onClick={onHandlerDisplayCouponMenu}>
          선택
        </Styled.DiscountMethodBtn>
      </Styled.DiscountMethodContentWrap>
    </Styled.DiscountMethodWrap>
  );
};
