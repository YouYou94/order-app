import * as Styled from './styled.jsx';

export const PhoneNum = ({ resultOrderer, setResultOrderer }) => {
  return (
    <Styled.OrdererComponentWrap>
      <Styled.OrdererComponentInput
        type="text"
        value={resultOrderer.phone_number}
      />
    </Styled.OrdererComponentWrap>
  );
};
