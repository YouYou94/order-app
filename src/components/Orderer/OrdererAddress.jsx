import { OrdererInput } from '../common/Input.jsx';
import * as Styled from './Styled.jsx';

export default function OrdererAddress() {
  return (
    <Styled.AddressBox>
      <Styled.AddressText>강원도 태백시 해지개길 26</Styled.AddressText>
      <OrdererInput type={'text'} />
    </Styled.AddressBox>
  );
}
