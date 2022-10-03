import { useState } from 'react';
import * as Styled from './styled.jsx';

export const Payment = ({ user, setResultPayment }) => {
  const [isChecked, setIsChecked] = useState({
    first: true,
    second: false,
  });
  const onHandlerSelectCard = event => {};

  const cardList = user.payment_methods.map(data => {
    return (
      <Styled.PaymentCarouselContent key={data.id} value={data.id}>
        {data.vendor_name}
      </Styled.PaymentCarouselContent>
    );
  });

  return (
    <Styled.PaymentWrap>
      <Styled.PaymentTitle>결제 수단 선택</Styled.PaymentTitle>
      <Styled.PaymentCarouselSlide>
        <Styled.PaymentCarouselContentWrap>
          {cardList}
        </Styled.PaymentCarouselContentWrap>
      </Styled.PaymentCarouselSlide>
      <Styled.PaymentCarouselNaviWrap>
        <Styled.PaymentCarouselNavi
          checked={isChecked.first}
          value="1"
          onClick={onHandlerSelectCard}
        />
        <Styled.PaymentCarouselNavi
          hecked={isChecked.second}
          value="2"
          onClick={onHandlerSelectCard}
        />
      </Styled.PaymentCarouselNaviWrap>
    </Styled.PaymentWrap>
  );
};
