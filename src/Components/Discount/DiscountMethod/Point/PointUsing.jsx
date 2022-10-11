import * as Styled from '../../styled.jsx';
import { POINT, FIXED, NONE } from '../../../../Constants.js';

export const PoingUsing = ({
  point,
  resultDiscount,
  setPoint,
  setResultDiscount,
  resultPrice,
}) => {
  const onHandlerPoint = event => {
    const { value } = event.target;
    setPoint(value);

    if (Number(value) > resultPrice) {
      alert('결제 금액보다 많습니다!');
      setPoint(0);
      setResultDiscount({
        method: NONE,
        type: '',
        value: 0,
        name: '',
        price: 0,
      });
    } else {
      setResultDiscount({
        method: POINT,
        type: FIXED,
        value: Number(value),
        name: '포인트 사용',
        price: Number(value),
      });
    }
  };

  return (
    <Styled.DiscountMethodInput
      type="text"
      value={resultDiscount.method === POINT ? point : 0}
      onChange={onHandlerPoint}
    />
  );
};
