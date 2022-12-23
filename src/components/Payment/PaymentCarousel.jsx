import * as Styled from './Styled.jsx';

export default function PaymentCarousel() {
  return (
    <Styled.CarouselBox>
      <Styled.CarouselSlide>
        <Styled.PaymentCardBox></Styled.PaymentCardBox>
        <Styled.PaymentCardBox></Styled.PaymentCardBox>
      </Styled.CarouselSlide>
    </Styled.CarouselBox>
  );
}
