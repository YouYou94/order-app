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

  display: flex;
  flex-direction: column;

  padding: 16px 32px;
  border-radius: 8px;

  background-color: rgb(204, 204, 204);
`;

export const VendorName = styled.span`
  height: 19px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #212121;
`;

export const CardNumBox = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #212121;
`;
