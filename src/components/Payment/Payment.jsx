import { SectionTitle } from '../common/Title.jsx';
import PaymentCarousel from './PaymentCarousel.jsx';
import * as Styled from './Styled.jsx';

export default function Payment({ payment }) {
  return (
    <Styled.PaymentBox>
      <SectionTitle>결제 수단 선택</SectionTitle>
      <PaymentCarousel payment={payment} />
    </Styled.PaymentBox>
  );
}
