import { OrdererInput } from '../common/Input.jsx';
import * as Styled from './Styled.jsx';

export default function OrdererAddress({ user, setUser }) {
  return (
    <Styled.AddressBox>
      <Styled.AddressText>{user.address}</Styled.AddressText>
      <OrdererInput type={'text'} value={user.address_detail} />
    </Styled.AddressBox>
  );
}
