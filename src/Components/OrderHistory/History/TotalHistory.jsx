import * as Styled from '../styled.jsx';

export const TotalHistory = ({ TOTALPRICE, discountPrice }) => {
  return (
    <>
      <Styled.OrderHistoryLabel>{TOTALPRICE.name}</Styled.OrderHistoryLabel>
      <Styled.OrderHistoryLabel>
        {(TOTALPRICE.price - discountPrice).toLocaleString('ko-KR')} 원
      </Styled.OrderHistoryLabel>
    </>
  );
};
