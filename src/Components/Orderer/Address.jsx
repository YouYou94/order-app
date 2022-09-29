import * as Styled from './styled.jsx';

export const Address = ({ resultOrderer, setResultOrderer }) => {
  const onHandlerChangeAddressDetail = event => {
    const { value } = event.target;
    setResultOrderer(current => ({
      ...current,
      address_detail: value,
    }));
  };

  return (
    <Styled.OrdererComponentWrap>
      <Styled.OrdererComponentLabel>
        {resultOrderer.address}
      </Styled.OrdererComponentLabel>
      <Styled.OrdererComponentInput
        type="text"
        value={resultOrderer.address_detail}
        onChange={onHandlerChangeAddressDetail}
      />
    </Styled.OrdererComponentWrap>
  );
};
