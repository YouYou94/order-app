import styled from 'styled-components';

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

export const PaymentCarouselSlide = styled.div`
  position: relative;

  flex: 1;

  margin-top: 0.5rem;

  border: 1px solid black;
  border-radius: 1rem;

  overflow: hidden;
`;

export const PaymentCarouselContentWrap = styled.div`
  width: 200%;
  height: 100%;

  display: flex;

  overflow: hidden;
`;

export const PaymentCarouselContent = styled.div`
  flex: 1;

  height: 100%;

  background-color: rgb(225, 225, 225);
  color: white;
`;

export const PaymentCarouselNaviWrap = styled.div`
  text-align: center;
`;

export const PaymentCarouselNavi = styled.button`
  width: 1rem;
  height: 1rem;

  margin: 0 0.1rem;

  border: 1px solid black;
  border-radius: 50%;

  background: ${prop => (prop.checked ? 'blueviolet' : 'white')};

  cursor: pointer;
`;
