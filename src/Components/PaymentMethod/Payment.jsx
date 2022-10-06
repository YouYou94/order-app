import { useRef, useState } from 'react';
import * as Styled from './styled.jsx';

const FIRST = 'first';
const SECOND = 'second';

export const Payment = ({ user, setResultPayment }) => {
  const [card, setCard] = useState(FIRST);
  const cardSlide = useRef();

  const onHandlerPrev = () => {
    if (card === SECOND) {
      setCard(FIRST);
      cardSlide.current.style.transition = 'transform 0.4s ease-in-out';
      cardSlide.current.style.transform = 'translateX(0%)';
    }
  };

  const onHandlerNext = () => {
    if (card === FIRST) {
      setCard(SECOND);
      cardSlide.current.style.transition = 'transform 0.4s ease-in-out';
      cardSlide.current.style.transform = 'translateX(-50%)';
    }
  };

  return (
    <Styled.PaymentWrap>
      <Styled.PaymentTitle>결제 수단 선택</Styled.PaymentTitle>
      <Styled.CarouselContainer>
        <Styled.CarouselSlide ref={cardSlide}>
          <Styled.CarouselContent>1번</Styled.CarouselContent>
          <Styled.CarouselContent>2번</Styled.CarouselContent>
        </Styled.CarouselSlide>
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
