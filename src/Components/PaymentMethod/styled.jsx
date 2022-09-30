import styled from 'styled-components';

export const PaymentWrap = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  margin-bottom: 0.5rem;
  padding: 1rem;

  background-color: white;
`;

export const PaymentCarouselSlide = styled.div`
  position: relative;

  flex: 1;

  border: 1px solid black;

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

  background-color: rgb(185, 185, 185);
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
