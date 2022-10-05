import * as Styled from '../../styled.jsx';
import { POINT, FIXED } from '../../../../Constants.js';

export const PoingUsing = ({
  point,
  resultDiscount,
  setPoint,
  setResultDiscount,
}) => {
  const onHandlerPoint = event => {
    const { value } = event.target;
    setPoint(value);
    setResultDiscount({
      method: POINT,
      type: FIXED,
      value: Number(value),
      name: '포인트 사용',
    });
  };

  return (
    <Styled.DiscountMethodInput
      type="text"
      value={resultDiscount.method === POINT ? point : 0}
      onChange={onHandlerPoint}
    />
  );
};
