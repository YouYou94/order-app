import * as Styled from './styled.jsx';

export const PaymentList = ({ payment_methods }) => {
  const paymentList = payment_methods.map((card, index) => {
    return (
      <Styled.CarouselContent key={card.id} value={index}>
        <Styled.CarouselVendorName>
          {card.vendor_name}
        </Styled.CarouselVendorName>
        <Styled.CarouselCardNumber>
          {card.card_number}
        </Styled.CarouselCardNumber>
      </Styled.CarouselContent>
    );
  });

  return paymentList;
};
