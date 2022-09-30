import * as Styled from '../styled.jsx';

export const PhoneNum = ({ resultOrderer, setResultOrderer }) => {
  const onHandlerChangePhoneNum = event => {
    const { value } = event.target;
    setResultOrderer(current => ({
      ...current,
      phone_number: value,
    }));
  };

  return (
    <Styled.OrdererComponentWrap>
      <Styled.OrdererComponentInput
        type="text"
        value={resultOrderer.phone_number}
        onChange={onHandlerChangePhoneNum}
      />
    </Styled.OrdererComponentWrap>
  );
};
