import styled from 'styled-components';
import { OrdererInput } from '../common/Input';

export function OrdererAddress({ prop }) {
  const { result, setResult } = prop;

  const onHandlerChangeAddress = event => {
    const { value } = event.target;
    setResult({ ...result, additional_address: value });
  };

  return (
    <InfoBox>
      {result.address}
      <OrdererInput
        value={result.additional_address}
        onHandler={onHandlerChangeAddress}
      />
    </InfoBox>
  );
}

// 나중에 유효성 검사로 숫자만 가능하게
export function OrdererPhoneNum({ prop }) {
  const { result, setResult } = prop;

  const onHandlerChangePhoneNum = event => {
    const { value } = event.target;
    setResult({ ...result, phone_number: value });
  };

  return (
    <OrdererInput
      value={result.phone_number}
      onHandler={onHandlerChangePhoneNum}
    />
  );
}

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 8px;
`;
