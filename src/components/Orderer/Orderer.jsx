import * as Styled from './Styled.jsx';
import { SectionTitle } from '../common/index.jsx';
import OrdererAddress from './OrdererAddress.jsx';
import OrdererPhoneNum from './OrdererPhoneNum.jsx';
import OrderRequest from './OrderRequest.jsx';

export default function Orderer() {
  return (
    <Styled.OrdererBox>
      <SectionTitle>주문자 정보</SectionTitle>
      <OrdererAddress />
      <OrdererPhoneNum />
      <OrderRequest />
    </Styled.OrdererBox>
  );
}

// gap을 적용하기 위해 index로 뺀다.
// 주소 컴포넌트
// 전화번호 컴포넌트
// 주문 요청사항 컴포넌트
// 컴포넌트 3개
