import styled from 'styled-components';
import next from './assets/next.png';
import prev from './assets/prev.png';

export const PaymentWrap = styled.div`
  flex: 25%;

  display: flex;
  flex-direction: column;

  margin-bottom: 0.2rem;
  padding: 1rem;

  background-color: white;
`;

export const PaymentTitle = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CarouselContainer = styled.div`
  height: 9rem;

  margin: 0.3rem;

  overflow: hidden;

  position: relative;
`;

export const CarouselSlide = styled.div`
  width: 200%;
  height: 100%;

  display: flex;
`;

export const CarouselContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-radius: 0.5rem;

  background-color: rgb(225, 225, 225);
`;

export const CarouselVendorName = styled.label`
  flex: 30%;

  padding: 1rem;
`;

export const CarouselCardNumber = styled.label`
  flex: 70%;
  text-align: center;
`;

export const CarouselBtnContainer = styled.div`
  text-align: center;
`;

export const CarouselPrevBtn = styled.button`
  width: 1.5rem;
  height: 1.5rem;

  margin: 0 0.3rem;

  border: none;
  border-radius: 50%;

  background-image: url(${prev});
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;
`;

export const CarouselNextBtn = styled.button`
  width: 1.5rem;
  height: 1.5rem;

  margin: 0 0.3rem;

  border: none;
  border-radius: 50%;

  background-image: url(${next});
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;
`;
