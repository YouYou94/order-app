import styled from 'styled-components';
import { PayButton } from '../index.jsx';

export function Pay({ prop }) {
  return (
    <PayBox>
      <PayButton>결제하기</PayButton>
    </PayBox>
  );
}

export const PayBox = styled.div`
  width: 414px;
  height: 87px;

  padding: 0px 0px 32px 0px;
`;
