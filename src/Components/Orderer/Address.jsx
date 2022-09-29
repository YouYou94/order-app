import * as Styled from './styled.jsx';

export const Address = ({ result, setResult }) => {
  return (
    <Styled.OrdererComponentWrap>
      <Styled.OrdererComponentLabel>
        {result.orderer.address}
      </Styled.OrdererComponentLabel>
      <Styled.OrdererComponentInput value={result.orderer.address_detail} />
    </Styled.OrdererComponentWrap>
  );
};
