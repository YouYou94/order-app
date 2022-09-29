import { Address } from './Address.jsx';
import * as Styled from './styled.jsx';

export const Orderer = ({ user, resultOrderer, setResultOrderer }) => {
  return (
    <Styled.OrdererWrap>
      <Styled.OrdererTitle>주문자 정보</Styled.OrdererTitle>
      <Address
        resultOrderer={resultOrderer}
        setResultOrderer={setResultOrderer}
      />
    </Styled.OrdererWrap>
  );
};
