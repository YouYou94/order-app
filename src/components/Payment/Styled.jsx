import styled from 'styled-components';

export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  gap: 16px;

  background-color: white;
`;

/* Carousel */
export const CarouselBox = styled.div`
  height: 236px;

  display: flex;
  flex-direction: column;
`;

export const CarouselSlide = styled.div`
  position: relative;

  height: 220px;
`;

export const PaymentCardBox = styled.div`
  position: absolute;

  width: 100%;
  height: 220px;

  padding: 16px 32px;
  border-radius: 8px;

  background-color: rgb(204, 204, 204);
`;
