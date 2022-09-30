import { Address } from './Address.jsx';
import { PhoneNum } from './PhoneNum.jsx';
import { Request } from './Request.jsx';
import * as Styled from './styled.jsx';

export const Orderer = ({
  user,
  resultOrderer,
  setResultOrderer,
  REQUESTOTTION,
}) => {
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
      <Request REQUESTOTTION={REQUESTOTTION} />
    </Styled.OrdererWrap>
  );
};
