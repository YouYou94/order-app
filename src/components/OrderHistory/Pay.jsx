import styled from 'styled-components';
import { PayButton } from '../index.jsx';

export function Pay({ prop }) {
  const { result } = prop;

  const onHandlerClickPay = () => {
    alert(
      `주소: ${result.address}\n상세주소: ${
        result.additional_address
      }\n전화번호: ${result.phone_number}\n주문 요청 사항: ${
        result.request.user_request
      }\n결제 수단: ${result.payment}\n할인 수단: ${
        result.discount.method
      }\n총 결제 금액: ${(
        result.resultPrice - result.discount.price
      ).toLocaleString('ko-KR')} 원\n결제완료!`
    );
  };
  return (
    <PayBox>
      <PayButton onHandler={onHandlerClickPay}>결제하기</PayButton>
    </PayBox>
  );
}

export const PayBox = styled.div`
  width: 414px;
  height: 87px;

  padding: 0px 0px 32px 0px;
`;
