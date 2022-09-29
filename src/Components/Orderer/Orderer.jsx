import * as Styled from './styled.jsx';

export const Orderer = ({ user }) => {
  console.log(user);
  return <Styled.OrdererWrap>{user.address}</Styled.OrdererWrap>;
};
