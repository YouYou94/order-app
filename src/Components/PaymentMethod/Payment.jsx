import { useEffect, useRef, useState } from 'react';
import { PaymentList } from './PaymentList.jsx';
import * as Styled from './styled.jsx';

export const Payment = ({ payment_methods, setResultPayment }) => {
  const FIRST = 0;
  const LAST = payment_methods.length - 1;

  const [cardNum, setCardNum] = useState(FIRST);
  const cardSlide = useRef();

  const onHandlerPrev = () => {
    cardNum === FIRST
      ? setCardNum(current => current)
      : setCardNum(current => current - 1);

    cardSlide.current.style.transition = 'transform 0.4s ease-in-out';
    cardSlide.current.style.transform = 'translateX(0%)';
  };

  const onHandlerNext = () => {
    cardNum === LAST
      ? setCardNum(current => current)
      : setCardNum(current => current + 1);

    cardSlide.current.style.transition = 'transform 0.4s ease-in-out';
    cardSlide.current.style.transform = 'translateX(-50%)';
  };

  useEffect(() => {
    setResultPayment(payment_methods[cardNum].vendor_name);
  }, [cardNum]);

  return (
    <Styled.PaymentWrap>
      <Styled.PaymentTitle>결제 수단 선택</Styled.PaymentTitle>
      <Styled.CarouselContainer>
        <Styled.CarouselSlide ref={cardSlide}>
          <PaymentList payment_methods={payment_methods} />
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
