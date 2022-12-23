import { OrdererInput } from '../common/Input.jsx';

export default function OrdererPhoneNum({ user, setUser }) {
  return <OrdererInput type={'text'} value={user.phone_number} />;
}
