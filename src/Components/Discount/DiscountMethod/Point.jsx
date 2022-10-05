import * as Styled from '../styled.jsx';

export const Point = ({ user }) => {
  return (
    <Styled.DiscountMethodWrap>
      <Styled.DiscountMethodContentWrap>
        <Styled.DiscountMethodLabel>포인트</Styled.DiscountMethodLabel>
        <Styled.DiscountMethodLabel color="blueviolet" weight="bold">
          사용 가능한 포인트 {user.points}점
        </Styled.DiscountMethodLabel>
      </Styled.DiscountMethodContentWrap>
      <Styled.DiscountMethodContentWrap>
        <Styled.DiscountMethodInput type="text" />
        <Styled.DiscountMethodBtn>모두 사용</Styled.DiscountMethodBtn>
      </Styled.DiscountMethodContentWrap>
    </Styled.DiscountMethodWrap>
  );
};
