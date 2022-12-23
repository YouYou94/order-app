import * as Styled from './Styled.jsx';

export default function PaymentCarousel({ payment }) {
  const paymentList = payment.map(card => {
    return (
      <Styled.PaymentCardBox key={card.id}>
        <Styled.VendorName>{card.vendor_name}</Styled.VendorName>
        <Styled.CardNumBox>{card.card_number}</Styled.CardNumBox>
      </Styled.PaymentCardBox>
    );
  });

  return (
    <Styled.CarouselBox>
      <Styled.CarouselSlide>{paymentList}</Styled.CarouselSlide>
    </Styled.CarouselBox>
  );
}
