import { Address } from './Info/Address.jsx';
import { PhoneNum } from './Info/PhoneNum.jsx';
import { Request } from './Request/Request.jsx';
import * as Styled from './styled.jsx';

export const Orderer = ({ user, resultOrderer, setResultOrderer }) => {
  return (
    <Styled.OrdererWrap>
      <Styled.OrdererTitle>주문자 정보</Styled.OrdererTitle>
      <Address
        resultOrderer={resultOrderer}
        setResultOrderer={setResultOrderer}
      />
      <PhoneNum
        resultOrderer={resultOrderer}
        setResultOrderer={setResultOrderer}
      />
      <Request
        resultOrderer={resultOrderer}
        setResultOrderer={setResultOrderer}
      />
    </Styled.OrdererWrap>
  );
};
