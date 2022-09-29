import * as Styled from './styled.jsx';

export const Address = ({ resultOrderer, setResultOrderer }) => {
  const onHandlerChangeAddressDetail = () => {};

  return (
    <Styled.OrdererComponentWrap>
      <Styled.OrdererComponentLabel>
        {resultOrderer.address}
      </Styled.OrdererComponentLabel>
      <Styled.OrdererComponentInput
        value={resultOrderer.address_detail}
        onChange={onHandlerChangeAddressDetail}
      />
    </Styled.OrdererComponentWrap>
  );
};
