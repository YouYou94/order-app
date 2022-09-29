import * as Styled from './styled.jsx';

export const Address = ({ user }) => {
  return (
    <Styled.OrdererComponentWrap>
      <Styled.OrdererComponentLabel>
        {user.address}
      </Styled.OrdererComponentLabel>
      <Styled.OrdererComponentInput value={user.address_detail} />
    </Styled.OrdererComponentWrap>
  );
};
