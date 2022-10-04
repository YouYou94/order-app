import * as Styled from './styled.jsx';

export const PayOrder = () => {
  const onHandlerPayOrder = () => {
    alert(`주소: \n상세주소: \n전화번호: \n주문 요청 사항: \n결제 수단: \n할인 수단: 
        \n총 결제 금액: 원\n결제완료!`);
  };
  return (
    <Styled.PayOrderWrap>
      <Styled.PayOrderBtn onClick={onHandlerPayOrder}>
        결제 하기
      </Styled.PayOrderBtn>
    </Styled.PayOrderWrap>
  );
};
