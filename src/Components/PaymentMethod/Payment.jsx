import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled.jsx';

const FIRST = 'first';
const SECOND = 'second';

export const Payment = ({ user, setResultPayment }) => {
  const [card, setCard] = useState(FIRST);
  const cardSlide = useRef();

  const cardList = user.payment_methods.map(card => {
    return (
      <Styled.CarouselContent key={card.id}>
        <Styled.CarouselVendorName>
          {card.vendor_name}
        </Styled.CarouselVendorName>
        <Styled.CarouselCardNumber>
          {card.card_number}
        </Styled.CarouselCardNumber>
      </Styled.CarouselContent>
    );
  });

  const onHandlerPrev = () => {
    if (card === SECOND) {
      setCard(FIRST);
      setResultPayment({
        payment: user.payment_methods[0].vendor_name,
      });
      cardSlide.current.style.transition = 'transform 0.4s ease-in-out';
      cardSlide.current.style.transform = 'translateX(0%)';
    }
  };

  const onHandlerNext = () => {
    if (card === FIRST) {
      setCard(SECOND);
      setResultPayment({
        payment: user.payment_methods[1].vendor_name,
      });
      cardSlide.current.style.transition = 'transform 0.4s ease-in-out';
      cardSlide.current.style.transform = 'translateX(-50%)';
    }
  };

  return (
    <Styled.PaymentWrap>
      <Styled.PaymentTitle>결제 수단 선택</Styled.PaymentTitle>
      <Styled.CarouselContainer>
        <Styled.CarouselSlide ref={cardSlide}>{cardList}</Styled.CarouselSlide>
      </Styled.CarouselContainer>
      <Styled.CarouselBtnContainer>
        <Styled.CarouselPrevBtn
          onClick={onHandlerPrev}
        ></Styled.CarouselPrevBtn>
        <Styled.CarouselNextBtn
          onClick={onHandlerNext}
        ></Styled.CarouselNextBtn>
      </Styled.CarouselBtnContainer>
    </Styled.PaymentWrap>
  );
};
