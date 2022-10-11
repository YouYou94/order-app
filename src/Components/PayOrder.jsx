import * as Styled from './styled.jsx';

export const PayOrder = ({
  resultOrderer,
  resultRequest,
  resultPayment,
  resultDiscount,
  resultPrice,
}) => {
  const onHandlerPayOrder = () => {
    alert(
      `주소: ${resultOrderer.address}\n상세주소: ${
        resultOrderer.address_detail
      }\n전화번호: ${resultOrderer.phone_number}\n주문 요청 사항: ${
        resultRequest.request
      }\n결제 수단: ${resultPayment.payment}\n할인 수단: ${
        resultDiscount.method
      }\n총 결제 금액: ${
        resultPrice - Number(resultDiscount.price)
      }원\n결제완료!`
    );
  };
  return (
    <Styled.PayOrderWrap>
      <Styled.PayOrderBtn onClick={onHandlerPayOrder}>
        결제 하기
      </Styled.PayOrderBtn>
    </Styled.PayOrderWrap>
  );
};
