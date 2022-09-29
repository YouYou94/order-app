import { Address } from './Address.jsx';
import * as Styled from './styled.jsx';

export const Orderer = ({ user, result, setResult }) => {
  return (
    <Styled.OrdererWrap>
      <Styled.OrdererTitle>주문자 정보</Styled.OrdererTitle>
      <Address result={result} setResult={setResult} />
    </Styled.OrdererWrap>
  );
};
