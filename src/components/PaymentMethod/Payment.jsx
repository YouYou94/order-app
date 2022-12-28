import { useContext, useState, useRef, useEffect } from 'react';
import { UserContext } from '../../App';
import Next from '../../assets/next.png';
import Prev from '../../assets/prev.png';
import styled from 'styled-components';

export function Payment({ prop }) {
  const { user } = useContext(UserContext);
  const { result, setResult } = prop;

  const first = 0;
  const last = user.payment_methods.length - 1;

  const [cardNum, setCardNum] = useState(first);
  const cardSlide = useRef();

  const onHandlerClickPrev = () => {
    cardNum === first
      ? setCardNum(current => current)
      : setCardNum(current => current - 1);

    cardSlide.current.style.transition = 'transform 0.4s ease-in-out';
    cardSlide.current.style.transform = 'translateX(0%)';
  };

  const onHandlerClickNext = () => {
    cardNum === last
      ? setCardNum(current => current)
      : setCardNum(current => current + 1);

    cardSlide.current.style.transition = 'transform 0.4s ease-in-out';
    cardSlide.current.style.transform = 'translateX(-50%)';
  };

  useEffect(() => {
    setResult({
      ...result,
      payment: user.payment_methods[cardNum].vendor_name,
    });
  }, [cardNum]);

  return (
    <CarouselBox>
      <PaymentBox ref={cardSlide}>
        {user.payment_methods.map((method, index) => {
          const { id, vendor_name, card_number } = method;

          return (
            <Card
              key={id}
              zindex={index}
              vendor_name={vendor_name}
              card_number={card_number}
            />
          );
        })}
      </PaymentBox>
      <PrevButton onClick={onHandlerClickPrev} />
      <NextButton onClick={onHandlerClickNext} />
    </CarouselBox>
  );
}

export function Card({ zindex, vendor_name, card_number }) {
  return (
    <PaymentCard zindex={zindex}>
      <NameLabel>{vendor_name}</NameLabel>
      <CardNumLabel>{card_number}</CardNumLabel>
    </PaymentCard>
  );
}

export const CarouselBox = styled.div`
  position: relative;

  width: 382px;
  height: 220px;

  overflow: hidden;
`;

export const PrevButton = styled.div`
  position: absolute;

  width: 1.5rem;
  height: 1.5rem;

  top: 50%;

  margin: 0 0.3rem;

  border: none;
  border-radius: 50%;

  background-image: url(${Prev});
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;
`;

export const NextButton = styled.div`
  position: absolute;

  width: 1.5rem;
  height: 1.5rem;

  top: 50%;
  right: 0;

  margin: 0 0.3rem;

  border: none;
  border-radius: 50%;

  background-image: url(${Next});
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;
`;

export const PaymentBox = styled.div`
  display: flex;

  width: 768px;
  height: 220px;
`;

export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 382px;
  height: 220px;

  padding: 16px 32px;
  border-radius: 8px;

  background-color: rgb(204, 204, 204);
`;

export const NameLabel = styled.label`
  height: 19px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: rgb(33, 33, 33);
`;

export const CardNumLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 169px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: rgb(33, 33, 33);
`;
