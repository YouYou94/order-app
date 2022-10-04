import * as Styled from './styled.jsx';

export const CouponMenu = ({ setIsMenu }) => {
  return (
    <Styled.CouponMenuContainer>
      <Styled.CouponMenuWhiteSpace
        onClick={() => setIsMenu(false)}
      ></Styled.CouponMenuWhiteSpace>
      <Styled.CouponMenuWrap></Styled.CouponMenuWrap>
    </Styled.CouponMenuContainer>
  );
};
